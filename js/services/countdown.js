/*==================================================
    LUMI COUNTDOWN SERVICE V1.0
==================================================*/

Lumi.register("Countdown", {
  timer: null,
  previousValues: new Map(),

  start() {
    if (!invitationConfig.countdown.enabled) {
      return;
    }

    this.stop();
    this.update();

    /*
      Se alinea el intervalo con el siguiente segundo real para evitar
      que el contador acumule desfase con el paso del tiempo.
    */
    const delay = 1000 - (Date.now() % 1000);

    window.setTimeout(() => {
      this.update();
      this.timer = window.setInterval(() => this.update(), 1000);
    }, delay);
  },

  stop() {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  },

  update() {
    const eventTime = new Date(invitationConfig.event.start).getTime();

    if (Number.isNaN(eventTime)) {
      console.error("La fecha configurada para el contador no es válida.");
      this.stop();
      return;
    }

    const remaining = eventTime - Date.now();

    if (remaining <= 0) {
      this.showFinishedMessage();
      this.stop();
      return;
    }

    const values = {
      days: Math.floor(remaining / 86400000),
      hours: Math.floor((remaining % 86400000) / 3600000),
      minutes: Math.floor((remaining % 3600000) / 60000),
      seconds: Math.floor((remaining % 60000) / 1000)
    };

    Object.entries(values).forEach(([id, value]) => {
      this.updateValue(id, String(value).padStart(2, "0"));
    });
  },

  updateValue(id, nextValue) {
    const node = document.getElementById(id);

    if (!node) {
      return;
    }

    const previousValue = this.previousValues.get(id);

    if (previousValue === nextValue) {
      return;
    }

    node.textContent = nextValue;
    this.previousValues.set(id, nextValue);

    node.classList.remove("is-changing");
    void node.offsetWidth;
    node.classList.add("is-changing");

    window.setTimeout(() => {
      node.classList.remove("is-changing");
    }, 360);
  },

  showFinishedMessage() {
    const container = document.getElementById("countdown");

    if (!container) {
      return;
    }

    container.className = "lumiCountdown lumiCountdown--finished";
    container.innerHTML = `
      <div class="lumiCountdown__finishedCard">
        <span class="lumiCountdown__finishedIcon" aria-hidden="true">✦</span>
        <strong>¡La celebración ha comenzado!</strong>
      </div>
    `;
  }
});
