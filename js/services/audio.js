Lumi.register("Audio", {
  frame: 0,
  feedbackTimer: 0,
  sparkTimer: 0,
  retryTimer: 0,

  init() {
    const button = document.getElementById("musicButton");
    const audio = document.getElementById("backgroundMusic");

    if (!button || !audio || !invitationConfig.audio.enabled) {
      if (button) button.hidden = true;
      return;
    }

    button.hidden = false;
    button.addEventListener("click", () => this.toggle());
    audio.addEventListener("play", () => this.sync());
    audio.addEventListener("pause", () => this.sync());
    audio.addEventListener("error", () => {
      console.error("No se pudo cargar el archivo de música.");
      button.disabled = true;
      button.classList.add("is-error");
      button.setAttribute("aria-label", "No se pudo cargar la música");
      button.title = "No se pudo cargar la música";
    });

    audio.volume = 0;
    audio.load();
    this.sync();
  },

  async play() {
    const audio = document.getElementById("backgroundMusic");
    if (!audio) return false;

    cancelAnimationFrame(this.frame);
    window.clearTimeout(this.retryTimer);
    audio.volume = 0;

    const tryPlay = async () => {
      try {
        await audio.play();
        this.fadeTo(invitationConfig.audio.volume);
        this.sync();
        return true;
      } catch (error) {
        if (
          audio.readyState <
          HTMLMediaElement.HAVE_FUTURE_DATA
        ) {
          audio.load();

          const retry = async () => {
            try {
              await audio.play();
              this.fadeTo(invitationConfig.audio.volume);
              this.sync();
            } catch (_) {
              this.sync();
            }
          };

          audio.addEventListener(
            "canplay",
            retry,
            { once: true }
          );

          this.retryTimer = window.setTimeout(
            retry,
            5000
          );
        } else {
          console.warn(
            "El navegador bloqueó la reproducción. Usa el botón de música para iniciarla.",
            error
          );
        }

        this.sync();
        return false;
      }
    };

    return tryPlay();
  },

  pause() {
    const audio = document.getElementById("backgroundMusic");
    if (!audio) return;

    cancelAnimationFrame(this.frame);
    audio.pause();
    this.sync();
  },

  toggle() {
    const audio = document.getElementById("backgroundMusic");
    if (!audio) return;

    if (audio.paused) {
      this.play();
    } else {
      this.pause();
    }
  },

  fadeTo(value) {
    const audio = document.getElementById("backgroundMusic");
    if (!audio) return;

    const parsed = Number(value);
    const target = Math.min(1, Math.max(0, Number.isFinite(parsed) ? parsed : 0.7));
    const duration = 1200;
    let startTime;

    const tick = now => {
      if (startTime === undefined) startTime = now;

      const elapsed = Math.max(0, now - startTime);
      const progress = Math.min(1, Math.max(0, elapsed / duration));
      const nextVolume = Math.min(1, Math.max(0, target * progress));

      audio.volume = nextVolume;

      if (progress < 1 && !audio.paused) {
        this.frame = requestAnimationFrame(tick);
      }
    };

    this.frame = requestAnimationFrame(tick);
  },

  feedback(state) {
    const button = document.getElementById("musicButton");
    if (!button) return;

    button.classList.remove("is-feedback");
    void button.offsetWidth;
    button.classList.add("is-feedback");

    window.clearTimeout(this.feedbackTimer);
    this.feedbackTimer = window.setTimeout(() => {
      button.classList.remove("is-feedback");
    }, 620);

    if (state === "playing") {
      button.classList.add("is-sparkling");

      window.clearTimeout(this.sparkTimer);
      this.sparkTimer = window.setTimeout(() => {
        button.classList.remove("is-sparkling");
      }, 700);
    }
  },

  sync() {
    const audio = document.getElementById("backgroundMusic");
    const button = document.getElementById("musicButton");
    if (!audio || !button) return;

    const isPlaying = !audio.paused;
    const previousState = button.dataset.audioState;

    button.dataset.audioState = isPlaying ? "playing" : "muted";
    button.classList.toggle("is-playing", isPlaying);
    button.classList.toggle("is-muted", !isPlaying);

    button.setAttribute("aria-pressed", String(isPlaying));
    button.setAttribute(
      "aria-label",
      isPlaying ? "Pausar música" : "Reproducir música"
    );

    button.title =
      isPlaying ? "Pausar música" : "Reproducir música";

    if (previousState && previousState !== button.dataset.audioState) {
      this.feedback(button.dataset.audioState);
    }
  }
});
