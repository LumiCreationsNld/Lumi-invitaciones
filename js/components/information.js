/*==================================================
    LUMI CARDS — INFORMACIÓN DEL EVENTO

    Responsabilidad:
    - Renderizar las tarjetas informativas.
    - Mantener una jerarquía visual clara.
    - Asignar iconografía y color según el tipo de dato.
==================================================*/

Lumi.Registry.register("information", () => {
  const container = document.getElementById("eventInfo");

  if (!container) {
    console.warn('No se encontró el elemento "#eventInfo".');
    return;
  }

  const information = Array.isArray(invitationConfig.information)
    ? invitationConfig.information
    : [];

  container.innerHTML = "";
  container.className = "lumiCards";

  information.forEach((item, index) => {
    if (item.visible === false || !item.value) {
      return;
    }

    const key = normalizeCardKey(item.key);
    const card = document.createElement("article");

    card.className = [
      "lumiCard",
      `lumiCard--${key}`,
      item.featured ? "lumiCard--featured" : ""
    ]
      .filter(Boolean)
      .join(" ");

    card.style.setProperty("--lumi-card-index", index);

    const icon = document.createElement("div");
    icon.className = "lumiCard__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = getLumiCardIcon(key);

    const title = document.createElement("h2");
    title.className = "lumiCard__title";
    title.textContent = item.title || "Información";

    const divider = document.createElement("div");
    divider.className = "lumiCard__divider";
    divider.setAttribute("aria-hidden", "true");
    divider.innerHTML = `
      <span></span>
      <i>✦</i>
      <span></span>
    `;

    const value = document.createElement("p");
    value.className = "lumiCard__value";
    value.textContent = item.value;

    const sparkle = document.createElement("span");
    sparkle.className = "lumiCard__sparkle";
    sparkle.setAttribute("aria-hidden", "true");
    sparkle.textContent = "✦";

    card.append(icon, title, divider, value, sparkle);
    container.append(card);
  });
});

function normalizeCardKey(key = "general") {
  const aliases = {
    fecha: "date",
    hora: "time",
    lugar: "place",
    direccion: "address",
    dirección: "address",
    aviso: "notice"
  };

  const normalized = String(key).trim().toLowerCase();
  return aliases[normalized] || normalized || "general";
}

function getLumiCardIcon(key) {
  const icons = {
    date: `
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <path d="M7 2.8v3M17 2.8v3M4.5 8.5h15" />
        <rect x="3.5" y="4.5" width="17" height="16" rx="3" />
        <path d="M8 12h3M13.5 12H16M8 16h3M13.5 16H16" />
      </svg>
    `,
    time: `
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5v5l3.3 2" />
      </svg>
    `,
    place: `
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <path d="M12 21s6.5-6.1 6.5-12A6.5 6.5 0 0 0 5.5 9C5.5 14.9 12 21 12 21Z" />
        <circle cx="12" cy="9" r="2.2" />
      </svg>
    `,
    address: `
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <path d="m3.5 10 8.5-7 8.5 7" />
        <path d="M5.5 9v11h13V9M9.5 20v-6h5v6" />
      </svg>
    `,
    notice: `
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <path d="M12 3.2 13.8 8l4.9-1.7-2.4 4.5 4.5 2.5-5.1.8.4 5.2-4.1-3.2-4.1 3.2.4-5.2-5.1-.8 4.5-2.5-2.4-4.5L10.2 8 12 3.2Z" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    `,
    general: `
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 10.5v6M12 7.4h.01" />
      </svg>
    `
  };

  return icons[key] || icons.general;
}
