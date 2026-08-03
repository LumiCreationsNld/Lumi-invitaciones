Lumi.register("Magic", {
  container: null,
  frame: null,
  particles: [],
  timers: [],
  isRunning: false,
  lastZones: ["", "", ""],
  lastTypes: [],
  highlightTimer: 0,
  lastHighlight: "",

  settings: [
    { minDelay: 5200, maxDelay: 8200, minDuration: 2000, maxDuration: 2700, scale: 1.12 },
    { minDelay: 5900, maxDelay: 8800, minDuration: 1900, maxDuration: 2550, scale: .95 },
    { minDelay: 6600, maxDelay: 9400, minDuration: 1850, maxDuration: 2450, scale: .84 }
  ],

  zones: [
    { x: 12, y: 10, sector: "top-left" },
    { x: 50, y: 5, sector: "top" },
    { x: 87, y: 12, sector: "top-right" },
    { x: 5, y: 26, sector: "left" },
    { x: 95, y: 31, sector: "right" },
    { x: 4, y: 48, sector: "left" },
    { x: 96, y: 51, sector: "right" },
    { x: 7, y: 72, sector: "bottom-left" },
    { x: 93, y: 76, sector: "bottom-right" },
    { x: 15, y: 92, sector: "bottom-left" },
    { x: 50, y: 96, sector: "bottom" },
    { x: 85, y: 91, sector: "bottom-right" }
  ],

  highlightZones: [
    { name:"left-upper",   side:"left",   x:0,  y:24, rotate:90 },
    { name:"left-middle",  side:"left",   x:0,  y:48, rotate:90 },
    { name:"left-lower",   side:"left",   x:0,  y:72, rotate:90 },

    { name:"right-upper",  side:"right",  x:0,  y:24, rotate:90 },
    { name:"right-middle", side:"right",  x:0,  y:48, rotate:90 },
    { name:"right-lower",  side:"right",  x:0,  y:72, rotate:90 },

    { name:"bottom-left",  side:"bottom", x:25, y:0, rotate:0 },
    { name:"bottom-right", side:"bottom", x:75, y:0, rotate:0 }
  ],

  particleTypes: [
    { name: "star", weight: 10 },
    { name: "heart", weight: 4 },
    { name: "paw", weight: 2 }
  ],

  colors: {
    star: ["#ffffff", "#ffe49a", "#8be7ef", "#ff91ca"],
    heart: ["#ffffff", "#ff91ca", "#c7a2ff"],
    paw: ["#ff91ca", "#8be7ef", "#c7a2ff"]
  },

  starShapes: ["diamond", "soft-star", "slender-star"],

  init() {
    this.container = document.getElementById("lumiMagic");
    this.frame = document.getElementById("lumiFrame");

    if (!this.container || !this.frame) return;

    this.particles = [
      this.container.querySelector(".lumiMagic__particle--a"),
      this.container.querySelector(".lumiMagic__particle--b"),
      this.container.querySelector(".lumiMagic__particle--c")
    ].filter(Boolean);

    document.addEventListener("visibilitychange", () => this.handleVisibility());
    window.addEventListener("pagehide", () => this.stopAmbient());
  },

  startAmbient() {
    if (!this.container || this.particles.length < 3 || this.isRunning) return;

    this.isRunning = true;
    this.container.classList.add("is-active");

    this.scheduleParticle(0, 260);
    this.scheduleParticle(1, 720);
    this.scheduleParticle(2, 1180);
    this.scheduleHighlight(1400);
  },

  stopAmbient() {
    this.isRunning = false;
    this.timers.forEach(timer => window.clearTimeout(timer));
    this.timers = [];
    this.particles.forEach(particle => {
      particle.classList.remove("is-visible");
    });
    window.clearTimeout(this.highlightTimer);
    this.highlightTimer = 0;
    const highlight = this.frame?.querySelector(".lumiMagic__highlight");
    if (highlight) highlight.remove();
  },

  handleVisibility() {
    if (document.hidden) {
      this.stopAmbient();
      return;
    }

    const invitation = document.getElementById("invitation");
    if (invitation && !invitation.hidden && invitation.classList.contains("is-visible")) {
      this.startAmbient();
    }
  },

  scheduleParticle(index, initialDelay = null) {
    if (!this.isRunning) return;

    const config = this.settings[index];
    const delay =
      initialDelay ??
      this.randomBetween(config.minDelay, config.maxDelay);

    this.timers[index] = window.setTimeout(
      () => this.spawnParticle(index),
      delay
    );
  },

  spawnParticle(index) {
    if (!this.isRunning || document.hidden) return;

    const particle = this.particles[index];
    const config = this.settings[index];
    if (!particle) return;

    const type = this.pickParticleType();
    const zone = this.pickZone(index, type);
    const duration = this.randomBetween(
      config.minDuration,
      config.maxDuration
    );
    const color = this.pickRandom(this.colors[type]);

    particle.className =
      `lumiMagic__particle ` +
      `lumiMagic__particle--${index === 0 ? "a" : index === 1 ? "b" : "c"} ` +
      `lumiMagic__particle--${type}`;

    if (type === "star") {
      particle.classList.add(
        `lumiMagic__particle--${this.pickRandom(this.starShapes)}`
      );
    }

    particle.style.setProperty("--magic-x", `${zone.x}%`);
    particle.style.setProperty("--magic-y", `${zone.y}%`);
    particle.style.setProperty("--magic-color", color);
    particle.style.setProperty("--magic-duration", `${duration}ms`);
    particle.style.setProperty("--magic-rotation", `${this.randomBetween(-14, 14)}deg`);
    particle.style.setProperty("--magic-drift-x", `${this.randomBetween(-5, 5)}px`);
    particle.style.setProperty("--magic-drift-y", `${this.randomBetween(-6, 4)}px`);
    particle.style.setProperty("--magic-scale", config.scale);

    this.lastZones[index] = zone.sector;
    this.rememberType(type);

    particle.classList.remove("is-visible");
    void particle.offsetWidth;
    particle.classList.add("is-visible");

    this.timers[index] = window.setTimeout(() => {
      particle.classList.remove("is-visible");
      this.scheduleParticle(index);
    }, duration + 140);
  },

  pickParticleType() {
    const recent = this.lastTypes.slice(-2);

    const pool = this.particleTypes.flatMap(type => {
      let weight = type.weight;

      if (recent.includes(type.name)) {
        weight = Math.max(1, Math.round(weight * .45));
      }

      if (type.name === "paw" && this.lastTypes.at(-1) === "paw") {
        weight = 0;
      }

      return Array.from({ length: weight }, () => type.name);
    });

    return this.pickRandom(pool.length ? pool : ["star"]);
  },

  rememberType(type) {
    this.lastTypes.push(type);
    if (this.lastTypes.length > 6) this.lastTypes.shift();
  },

  pickZone(index, type = "star") {
    const occupied = this.lastZones.filter((_, i) => i !== index);

    const pawSectors = [
      "left",
      "right",
      "bottom-left",
      "bottom-right",
      "bottom"
    ];

    let available = this.zones.filter(zone => {
      const distinct = !occupied.includes(zone.sector);
      const allowed = type !== "paw" || pawSectors.includes(zone.sector);
      return distinct && allowed;
    });

    if (!available.length) {
      available = this.zones.filter(zone => {
        return type !== "paw" || pawSectors.includes(zone.sector);
      });
    }

    return this.pickRandom(available);
  },

  scheduleHighlight(initialDelay = null) {
    if (!this.isRunning) return;
    const delay = initialDelay ?? this.randomBetween(9000, 14000);
    window.clearTimeout(this.highlightTimer);
    this.highlightTimer = window.setTimeout(() => this.spawnHighlight(), delay);
  },

  spawnHighlight() {
    if (!this.isRunning || document.hidden || !this.container || !this.frame) return;

    const available = this.highlightZones.filter(
      zone => zone.name !== this.lastHighlight
    );

    const zone =
      this.lastHighlight === ""
        ? { name: "first-bottom-frame-test", side: "bottom", x: 50, y: 0, rotate: 0 }
        : this.pickRandom(
            available.length
              ? available
              : this.highlightZones
          );

    this.lastHighlight = zone.name;

    const highlight = document.createElement("span");
    highlight.className =
      `lumiMagic__highlight lumiMagic__highlight--${zone.side}`;
    highlight.style.setProperty("--highlight-x", `${zone.x}%`);
    highlight.style.setProperty("--highlight-y", `${zone.y}%`);
    highlight.style.setProperty("--highlight-rotate", `${zone.rotate}deg`);
    highlight.style.setProperty("--highlight-color", this.pickRandom(["#fff7b8","#8ff2ff","#ffb2dc"]));

    this.frame.appendChild(highlight);
    requestAnimationFrame(() => highlight.classList.add("is-visible"));

    window.setTimeout(() => {
      highlight.remove();
      this.scheduleHighlight();
    }, 2050);
  },

  portalBurst() {
    if (!this.container) return;

    [
      { x: 20, y: 14 },
      { x: 82, y: 25 },
      { x: 11, y: 58 }
    ].forEach((zone, index) => {
      window.setTimeout(() => this.spawnBurstSpark(zone, index), index * 120);
    });
  },

  spawnBurstSpark(zone, index) {
    const spark = document.createElement("span");
    const shape = this.starShapes[index % this.starShapes.length];

    spark.className =
      `lumiMagic__particle lumiMagic__particle--star ` +
      `lumiMagic__particle--burst lumiMagic__particle--${shape}`;
    spark.style.setProperty("--magic-x", `${zone.x}%`);
    spark.style.setProperty("--magic-y", `${zone.y}%`);
    spark.style.setProperty(
      "--magic-color",
      this.colors.star[index % this.colors.star.length]
    );
    spark.style.setProperty("--magic-duration", "900ms");
    spark.style.setProperty("--magic-rotation", `${index * 10 - 10}deg`);
    spark.style.setProperty("--magic-drift-x", `${index % 2 ? 8 : -8}px`);
    spark.style.setProperty("--magic-drift-y", "-10px");
    spark.style.setProperty("--magic-scale", index === 1 ? ".9" : ".76");

    this.container.appendChild(spark);
    requestAnimationFrame(() => spark.classList.add("is-visible"));
    window.setTimeout(() => spark.remove(), 1100);
  },

  pickRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
  },

  randomBetween(min, max) {
    return Math.round(min + Math.random() * (max - min));
  }
});
