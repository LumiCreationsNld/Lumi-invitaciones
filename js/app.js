Lumi.register("App", {
  async start() {
    try {
      document.body.classList.add("intro-active");
      Lumi.Theme.apply();
      this.fillIntro();
      Lumi.Template.render();
      Lumi.Actions.init();
      Lumi.Audio.init();
      Lumi.Magic.init();
      await Lumi.Assets.preloadCritical();
      this.bindIntro();
      console.info(`LUMI Invitations Framework ${Lumi.version} listo.`);
    } catch (error) {
      console.error(error);
      document.body.innerHTML = `
        <main style="padding:2rem;text-align:center">
          <h1>No se pudo cargar la invitación</h1>
          <p>${error.message}</p>
        </main>`;
    }
  },

  fillIntro() {
    const title = document.getElementById("introTitle");
    const subtitle = document.getElementById("introSubtitle");
    const buttonLabel = document.querySelector(".introButton__label");

    if (title) {
      title.textContent = "Has recibido una invitación muy especial.";
    }

    if (subtitle) {
      subtitle.textContent =
        "Descubre el momento que hemos preparado para ti.";
    }

    if (buttonLabel) {
      buttonLabel.textContent = "Abrir invitación";
    }
  },

  bindIntro() {
    document.getElementById("btnOpen").addEventListener(
      "click",
      () => this.open(),
      { once: true }
    );
  },

  async open() {
    const intro = document.getElementById("intro");
    const invitation = document.getElementById("invitation");
    const button = document.getElementById("btnOpen");

    if (!intro || !invitation) {
      return;
    }

    if (button) {
      button.disabled = true;
      button.classList.add("is-pressed");
    }

    /*
      El audio debe iniciarse dentro del gesto del usuario
      para evitar que el navegador móvil lo bloquee.
    */
    if (invitationConfig.audio.autoplayOnOpen) {
      Lumi.Audio.play();
    }

    /*
      La invitación se dibuja detrás de la Intro antes de abrir
      las dos hojas del portal.
    */
    invitation.hidden = false;
    invitation.classList.remove("is-visible");

    await new Promise(resolve =>
      requestAnimationFrame(() =>
        requestAnimationFrame(resolve)
      )
    );

    document.body.classList.add("intro-opening");
    intro.classList.add("is-opening");

    /*
      La invitación comienza a aparecer cuando la apertura
      ya permite verla parcialmente.
    */
    await new Promise(resolve => setTimeout(resolve, 230));
    invitation.classList.add("is-visible");

    await new Promise(resolve => setTimeout(resolve, 820));

    intro.hidden = true;
    intro.classList.remove("is-opening");

    document.body.classList.remove("intro-active", "intro-opening");
    document.body.classList.add("invitation-open");

    Lumi.Countdown.start();
    Lumi.Magic.startAmbient();
    Lumi.Magic.portalBurst();
    Lumi.Events.emit("invitation:opened");
  }
});

document.addEventListener("DOMContentLoaded", () => Lumi.App.start());
