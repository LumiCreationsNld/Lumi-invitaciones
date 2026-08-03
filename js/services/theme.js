Lumi.register("Theme", {
  apply() {
    const path = Lumi.Assets.themePath();

    const background = document.getElementById("backgroundImage");
    if (background) {
      background.style.backgroundImage = `url("${path}/background.png")`;
    }

    const logo = document.getElementById("introLogo");
    if (logo) {
      logo.src = `${path}/logo.png`;
      logo.alt = `Invitación de ${invitationConfig.celebrant.name}`;
    }

    const music = document.getElementById("backgroundMusic");
    if (music) {
      music.src = `${path}/music-mobile.mp3`;
    }
  }
});
