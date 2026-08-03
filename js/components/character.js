Lumi.Registry.register("character", () => {
  const character = document.getElementById("character");

  if (!character) {
    console.warn('No se encontró el elemento "#character".');
    return;
  }

  const themeName =
    invitationConfig.theme?.name ||
    "la invitación";

  character.innerHTML = `
    <div class="characterScene">
      <div class="characterGlow" aria-hidden="true"></div>
      <div class="characterShadow" aria-hidden="true"></div>

      <img
        class="characterImage"
        src="${Lumi.Assets.image("character.png")}"
        alt="Personaje del tema ${themeName}"
        decoding="async"
      >

      <div class="characterParticles" aria-hidden="true"></div>
    </div>
  `;
});
