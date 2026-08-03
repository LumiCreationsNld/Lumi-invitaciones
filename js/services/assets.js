Lumi.register("Assets", {
  themePath() {
    return `assets/themes/${invitationConfig.theme.folder}`;
  },

  image(name) {
    return `${this.themePath()}/${name}`;
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
      document.fonts.load('1em "Futurino"'),
      document.fonts.load('1em "Fredoka"'),
      document.fonts.load('1em "Poppins"'),
      document.fonts.ready
    ]);
  },

  async preloadCritical() {
    const sources = [
      this.image("background.png"),
      this.image("logo.png"),
      this.image("character.png")
    ];

    const results = await Promise.allSettled(
      sources.map(source => this.preloadImage(source))
    );

    results
      .filter(result => result.status === "rejected")
      .forEach(result => console.warn(result.reason.message));

    await Promise.all([
      this.waitForFonts(),
      this.loadThemeFavicon()
    ]);
  }
});
