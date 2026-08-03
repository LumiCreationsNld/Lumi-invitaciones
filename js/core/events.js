Lumi.register("Events", {
  listeners: new Map(),
  on(name, callback) {
    const callbacks = this.listeners.get(name) ?? new Set();
    callbacks.add(callback);
    this.listeners.set(name, callbacks);
    return () => this.off(name, callback);
  },
  off(name, callback) { this.listeners.get(name)?.delete(callback); },
  emit(name, detail = {}) { this.listeners.get(name)?.forEach(callback => callback(detail)); }
});
