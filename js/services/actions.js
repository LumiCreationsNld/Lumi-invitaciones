Lumi.register("Actions", {
  init() { document.getElementById("actions").addEventListener("click", event => { const button = event.target.closest("[data-action]"); if (button) this.run(button.dataset.action); }); },
  run(action) {
    const handlers = { whatsapp: () => this.whatsapp(), map: () => this.map(), calendar: () => this.calendar() };
    handlers[action]?.();
  },
  whatsapp() {
    const phone = invitationConfig.contact.phone.replace(/\D/g, "");
    const message = encodeURIComponent(invitationConfig.contact.message);
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank", "noopener,noreferrer");
  },
  map() { window.open(invitationConfig.mapUrl, "_blank", "noopener,noreferrer"); },
  calendar() {
    const format = value => new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
    const title = encodeURIComponent(`Cumpleaños de ${invitationConfig.celebrant.name}`);
    const location = encodeURIComponent(`${invitationConfig.event.place}, ${invitationConfig.event.address}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${format(invitationConfig.event.start)}/${format(invitationConfig.event.end)}&location=${location}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }
});
