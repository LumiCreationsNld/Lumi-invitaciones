const invitationConfig = Object.freeze({
  celebrant: { name: "Eliette", age: 5 },
  celebration: { prefix: "Cumple", suffix: "Años" },
  event: {
    visibleDate: "14 de agosto de 2026",
    start: "2026-08-14T16:00:00-06:00",
    end: "2026-08-14T21:00:00-06:00",
    visibleTime: "4:00 PM",
    place: "Quinta la Esperanza",
    address: "Calle La Esperanza, Col. Unión del Recuerdo",
    notice: "Ceremonia y Fotografías de 4:30 a 5:00.No olvides tu traje de baño"
  },
  theme: { name: "Gabby's Dollhouse", folder: "gabby" },
  intro: { title: "¡Tienes una invitación!", subtitle: "Haz clic para descubrir la sorpresa.", button: "Abrir Invitación" },
  contact: { phone: "528673298207", message: "¡Hola! Confirmo mi asistencia al cumpleaños de Eliette." },
  mapUrl: "https://maps.app.goo.gl/Zr2iKGaqEuuxHR9P7",
  audio: { enabled: true, volume: .7, autoplayOnOpen: true },
  countdown: { enabled: true },
  information: [
    { key: "date", title: "Fecha", icon: "📅", value: "14 de agosto de 2026" },
    { key: "time", title: "Hora", icon: "🕒", value: "4:00 PM" },
    { key: "place", title: "Lugar", icon: "📍", value: "Quinta la Esperanza" },
    { key: "address", title: "Dirección", icon: "🏠", value: "Calle La Esperanza, Col. Unión del Recuerdo" },
    { key: "notice", title: "Aviso", icon: "🎉", value: "Ceremonia y Fotografías\n4:30 a 5:00.\n\n¡¡No olvides tu traje de baño!!", featured: true }

  ],
  buttons: [
    { text: "Confirmar asistencia", description: "Responder por WhatsApp", icon: "💬", action: "whatsapp", color: "rosa" },
    { text: "Cómo llegar", description: "Abrir en Google Maps", icon: "📍", action: "map", color: "morado" },
    { text: "Agregar al calendario", description: "Guardar la fecha del evento", icon: "📅", action: "calendar", color: "azul" }
  ]
});
