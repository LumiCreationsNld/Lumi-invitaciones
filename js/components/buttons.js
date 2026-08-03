/*==================================================
    LUMI BUTTONS V1.0
==================================================*/

Lumi.Registry.register("buttons", () => {
  const actions = document.getElementById("actions");

  if (!actions) {
    console.warn('No se encontró el contenedor "#actions".');
    return;
  }

  actions.replaceChildren();

  const fragment = document.createDocumentFragment();

  invitationConfig.buttons.forEach((config, index) => {
    if (config.visible === false) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "lumiButton",
      `lumiButton--${config.color || "rosa"}`
    ].join(" ");
    button.dataset.action = config.action;
    button.style.setProperty("--lumi-button-index", index);
    button.setAttribute("aria-label", config.text);

    const icon = document.createElement("span");
    icon.className = "lumiButton__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = getLumiButtonIcon(config.action);

    const copy = document.createElement("span");
    copy.className = "lumiButton__copy";

    const title = document.createElement("span");
    title.className = "lumiButton__title";
    title.textContent = config.text;

    copy.append(title);

    if (config.description) {
      const description = document.createElement("span");
      description.className = "lumiButton__description";
      description.textContent = config.description;
      copy.append(description);
    }

    const arrow = document.createElement("span");
    arrow.className = "lumiButton__arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = `
      <svg viewBox="0 0 24 24" role="img">
        <path d="m9 5 7 7-7 7" />
      </svg>
    `;

    const shine = document.createElement("span");
    shine.className = "lumiButton__shine";
    shine.setAttribute("aria-hidden", "true");

    button.append(icon, copy, arrow, shine);
    fragment.append(button);
  });

  actions.append(fragment);
});

function getLumiButtonIcon(action) {
  const icons = {
    whatsapp: `
      <svg viewBox="0 0 448 512" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L.1 480l117.7-30.9c32.4 17.7 68.9 27 106 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.8l-6.7-4-69.8 18.3 18.6-68-4.4-7c-18.5-29.4-28.2-63.4-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.3c-5.5-2.8-32.8-16.1-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.3-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.1 31.5 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
      </svg>
    `,
    map: `
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M12 2.25a7 7 0 0 0-7 7c0 5.37 6.16 11.56 6.42 11.82a.82.82 0 0 0 1.16 0C12.84 20.81 19 14.62 19 9.25a7 7 0 0 0-7-7Zm0 9.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z" />
      </svg>
    `,
    calendar: `
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M7.25 2a.75.75 0 0 1 .75.75V4h8V2.75a.75.75 0 0 1 1.5 0V4h.75A3.75 3.75 0 0 1 22 7.75v10.5A3.75 3.75 0 0 1 18.25 22H5.75A3.75 3.75 0 0 1 2 18.25V7.75A3.75 3.75 0 0 1 5.75 4h.75V2.75A.75.75 0 0 1 7.25 2ZM3.5 9.25v9A2.25 2.25 0 0 0 5.75 20.5h12.5a2.25 2.25 0 0 0 2.25-2.25v-9h-17Zm13.03 3.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 3.72-3.72a.75.75 0 0 1 1.06 0Z" />
      </svg>
    `
  };

  return icons[action] || `
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M10.5 3h3v7.5H21v3h-7.5V21h-3v-7.5H3v-3h7.5V3Z" />
    </svg>
  `;
}
