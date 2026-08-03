Lumi.register("Assets", {
  themePath() {
    return `assets/themes/${invitationConfig.theme.folder}`;
  },

  image(name) {
    return `${this.themePath()}/${name}`;
  },

  withTimeout(promise, timeout = 3500) {
    return Promise.race([
      promise,
      new Promise((_, reject) => {
        window.setTimeout(
          () => reject(
            new Error(`Tiempo de carga agotado: ${timeout} ms`)
          ),
          timeout
        );
      })
    ]);
  },

  preloadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(src);
      image.onerror = () => reject(new Error(`No se pudo cargar ${src}`));
      image.src = src;
    });
  },

  resourceExists(src) {
    return this.preloadImage(src)
      .then(() => true)
      .catch(() => false);
  },

  async loadThemeFavicon() {
    const favicon = document.getElementById("favicon");
    if (!favicon) return;

    const source = this.image("favicon.png");
    const exists = await this.resourceExists(source);
    favicon.href = exists ? source : "data:,";
  },

  async waitForFonts() {
    if (!document.fonts) return;

    await Promise.allSettled([
      this.withTimeout(document.fonts.load('1em "Futurino"'), 2500),
      this.withTimeout(document.fonts.load('1em "Fredoka"'), 2500),
      this.withTimeout(document.fonts.load('1em "Poppins"'), 2500)
    ]);
  },

  async preloadCritical() {
    await Promise.allSettled([
      this.withTimeout(
        this.preloadImage(this.image("background.png")),
        4000
      ),
      this.waitForFonts()
    ]);

    Promise.allSettled([
      this.withTimeout(
        this.preloadImage(this.image("logo.png")),
        5000
      ),
      this.withTimeout(
        this.preloadImage(this.image("character.png")),
        7000
      ),
      this.withTimeout(
        this.loadThemeFavicon(),
        3500
      )
    ]).then(results => {
      results
        .filter(result => result.status === "rejected")
        .forEach(result => console.warn(result.reason?.message));
    });
  }
});
