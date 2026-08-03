/*==================================================
    LUMI COUNTDOWN V1.0
==================================================*/

Lumi.Registry.register("countdown", () => {
  const container = document.getElementById("countdown");

  if (!container) {
    throw new Error('No se encontró el contenedor "#countdown".');
  }

  container.innerHTML = "";
  container.className = "lumiCountdown";
  container.setAttribute("aria-label", "Cuenta regresiva para el evento");

  const units = [
    {
      id: "days",
      label: "Días",
      tone: "pink",
      icon: createCountdownIcon("hourglass")
    },
    {
      id: "hours",
      label: "Horas",
      tone: "purple",
      icon: createCountdownIcon("clock")
    },
    {
      id: "minutes",
      label: "Min",
      tone: "blue",
      icon: createCountdownIcon("star")
    },
    {
      id: "seconds",
      label: "Seg",
      tone: "yellow",
      icon: createCountdownIcon("spark")
    }
  ];

  const fragment = document.createDocumentFragment();

  units.forEach((unit, index) => {
    const card = document.createElement("article");
    card.className = `lumiCountdown__card lumiCountdown__card--${unit.tone}`;
    card.style.setProperty("--lumi-countdown-index", index);

    const icon = document.createElement("span");
    icon.className = "lumiCountdown__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = unit.icon;

    const value = document.createElement("span");
    value.id = unit.id;
    value.className = "lumiCountdown__value";
    value.textContent = "00";
    value.setAttribute("aria-live", unit.id === "seconds" ? "off" : "polite");

    const divider = document.createElement("span");
    divider.className = "lumiCountdown__divider";
    divider.setAttribute("aria-hidden", "true");

    const label = document.createElement("small");
    label.className = "lumiCountdown__label";
    label.textContent = unit.label;

    card.append(icon, value, divider, label);
    fragment.append(card);
  });

  container.append(fragment);
});

function createCountdownIcon(type) {
  const icons = {
    hourglass: `
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <path d="M7 3h10M7 21h10M8 4.5c0 3 1.8 4.4 4 5.5 2.2-1.1 4-2.5 4-5.5M8 19.5c0-3 1.8-4.4 4-5.5 2.2 1.1 4 2.5 4 5.5"/>
      </svg>`,
    clock: `
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <circle cx="12" cy="12" r="8"/>
        <path d="M12 7v5l3 2"/>
      </svg>`,
    star: `
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <path d="m12 3 2.5 5.1 5.6.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9 5.6-.8L12 3Z"/>
      </svg>`,
    spark: `
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <path d="M12 3c.8 4.6 2.4 6.2 7 7-4.6.8-6.2 2.4-7 7-.8-4.6-2.4-6.2-7-7 4.6-.8 6.2-2.4 7-7Z"/>
        <path d="M18.5 16.5c.3 1.8.9 2.4 2.7 2.7-1.8.3-2.4.9-2.7 2.7-.3-1.8-.9-2.4-2.7-2.7 1.8-.3 2.4-.9 2.7-2.7Z"/>
      </svg>`
  };

  return icons[type] || icons.clock;
}
