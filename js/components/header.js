/*==================================================
    LUMI HEADER

    Responsabilidad:
    - Mostrar el nombre del festejado.
    - Mostrar la frase de celebración.
    - Destacar visualmente la edad.
    - Añadir decoración temática no interactiva.
==================================================*/

function createHeaderDecor(type, modifier, fill) {
  const item = document.createElement("span");
  item.className = `lumiHeader__ageDecor lumiHeader__ageDecor--${modifier}`;
  item.setAttribute("aria-hidden", "true");

  const icons = {
    heart: `
      <svg viewBox="0 0 64 64" role="presentation">
        <path
          d="M32 54C24 47 9 37 9 22.5C9 14.5 14.6 9 22 9C26.7 9 30.2 11.4 32 14.3C33.8 11.4 37.3 9 42 9C49.4 9 55 14.5 55 22.5C55 37 40 47 32 54Z"
          fill="${fill}"
          stroke="#fff"
          stroke-width="5"
          stroke-linejoin="round"
        />
        <path
          d="M18 18C20.5 14.5 25 14 28 16"
          fill="none"
          stroke="rgba(255,255,255,.72)"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>`,
    star: `
      <svg viewBox="0 0 64 64" role="presentation">
        <path
          d="M32 7C35.7 7 38.5 18.4 41.2 20.3C44 22.3 55.7 20.2 57 24.1C58.2 27.7 47.8 33.2 46.8 36.4C45.7 39.7 51.3 50.2 48.1 52.5C44.9 54.8 36.4 46.7 32 46.7C27.6 46.7 19.1 54.8 15.9 52.5C12.7 50.2 18.3 39.7 17.2 36.4C16.2 33.2 5.8 27.7 7 24.1C8.3 20.2 20 22.3 22.8 20.3C25.5 18.4 28.3 7 32 7Z"
          fill="${fill}"
          stroke="#fff"
          stroke-width="5"
          stroke-linejoin="round"
        />
        <path
          d="M22 23C25 18.5 29 17 34 18"
          fill="none"
          stroke="rgba(255,255,255,.68)"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>`,
    paw: `
      <svg viewBox="0 0 64 64" role="presentation">
        <ellipse cx="32" cy="40" rx="17" ry="14" fill="${fill}" stroke="#fff" stroke-width="5" />
        <ellipse cx="14" cy="25" rx="7" ry="9" fill="${fill}" stroke="#fff" stroke-width="4" />
        <ellipse cx="27" cy="16" rx="7" ry="9" fill="${fill}" stroke="#fff" stroke-width="4" />
        <ellipse cx="41" cy="16" rx="7" ry="9" fill="${fill}" stroke="#fff" stroke-width="4" />
        <ellipse cx="53" cy="26" rx="7" ry="9" fill="${fill}" stroke="#fff" stroke-width="4" />
        <path
          d="M24 36C28 31.5 36 31 40 35"
          fill="none"
          stroke="rgba(255,255,255,.55)"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>`
  };

  item.innerHTML = icons[type] || "";
  return item;
}

function createHeaderSparkle(modifier) {
  const sparkle = document.createElement("span");
  sparkle.className = `lumiHeader__prefixSparkle lumiHeader__prefixSparkle--${modifier}`;
  sparkle.setAttribute("aria-hidden", "true");
  sparkle.innerHTML = `
    <svg viewBox="0 0 64 64" role="presentation">
      <path
        d="M32 5C35.4 18.2 40.8 25.2 54 32C40.8 38.8 35.4 45.8 32 59C28.6 45.8 23.2 38.8 10 32C23.2 25.2 28.6 18.2 32 5Z"
        fill="#FFE39A"
        stroke="#FFFFFF"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <path
        d="M27 22C29 18.8 32.2 17 36 17"
        fill="none"
        stroke="rgba(255,255,255,.82)"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>`;
  return sparkle;
}

Lumi.Registry.register("header", () => {
  const header = document.getElementById("header");

  if (!header) {
    console.warn('No se encontró el elemento "#header".');
    return;
  }

  const celebrant = invitationConfig.celebrant;
  const celebration = invitationConfig.celebration || {};

  header.innerHTML = "";
  header.className = "lumiHeader";

  const name = document.createElement("h1");
  name.className = "lumiHeader__name";
  name.textContent = celebrant.name;

  const celebrationBlock = document.createElement("div");
  celebrationBlock.className = "lumiHeader__celebration";
  celebrationBlock.setAttribute(
    "aria-label",
    `${celebration.prefix || "Cumple"} ${celebrant.age} ${celebration.suffix || "Años"}`
  );

  const prefixRow = document.createElement("div");
  prefixRow.className = "lumiHeader__prefixRow";
  prefixRow.setAttribute("aria-hidden", "true");

  const prefix = document.createElement("span");
  prefix.className = "lumiHeader__prefix";
  prefix.textContent = celebration.prefix || "Cumple";

  prefixRow.append(
    createHeaderSparkle("left"),
    prefix,
    createHeaderSparkle("right")
  );

  const age = document.createElement("span");
  age.className = "lumiHeader__number";
  age.setAttribute("aria-hidden", "true");

  const agePurple = document.createElement("span");
  agePurple.className =
    "lumiHeader__numberLayer lumiHeader__numberLayer--purple";
  agePurple.textContent = celebrant.age;

  const ageWhite = document.createElement("span");
  ageWhite.className =
    "lumiHeader__numberLayer lumiHeader__numberLayer--white";
  ageWhite.textContent = celebrant.age;

  const ageFill = document.createElement("span");
  ageFill.className =
    "lumiHeader__numberLayer lumiHeader__numberLayer--fill";
  ageFill.textContent = celebrant.age;

  const ageShine = document.createElement("span");
  ageShine.className =
    "lumiHeader__numberLayer lumiHeader__numberLayer--shine";
  ageShine.textContent = celebrant.age;

  age.append(agePurple, ageWhite, ageFill, ageShine);

  const numberScene = document.createElement("div");
  numberScene.className = "lumiHeader__numberScene";
  numberScene.setAttribute("aria-hidden", "true");

  numberScene.append(
    createHeaderDecor("heart", "heartOne", "#ff69b6"),
    createHeaderDecor("star", "starOne", "#b06be8"),
    createHeaderDecor("paw", "pawOne", "#ff67b5"),
    age,
    createHeaderDecor("heart", "heartTwo", "#9a66e8"),
    createHeaderDecor("star", "starTwo", "#ffc85c"),
    createHeaderDecor("paw", "pawTwo", "#54d4dc")
  );

  const suffix = document.createElement("span");
  suffix.className = "lumiHeader__suffix";
  suffix.textContent = celebration.suffix || "Años";
  suffix.setAttribute("aria-hidden", "true");

  celebrationBlock.append(prefixRow, numberScene, suffix);
  header.append(name, celebrationBlock);
});
