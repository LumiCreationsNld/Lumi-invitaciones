const Lumi = {
  version: "4.0.0-alpha.7",
  modules: new Map(),
  register(name, module) {
    if (!name || !module) throw new Error("Lumi.register requiere nombre y módulo.");
    if (this.modules.has(name)) throw new Error(`El módulo ${name} ya está registrado.`);
    this.modules.set(name, module);
    this[name] = module;
  },
  get(name) { return this.modules.get(name) ?? null; }
};
