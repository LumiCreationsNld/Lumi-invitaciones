Lumi.register("Registry", {
  components: new Map(),
  register(name, render) {
    if (!name || typeof render !== "function") throw new Error("Componente inválido.");
    if (this.components.has(name)) throw new Error(`Componente duplicado: ${name}`);
    this.components.set(name, render);
  },
  render(name) {
    const renderer = this.components.get(name);
    if (!renderer) throw new Error(`Componente no registrado: ${name}`);
    renderer();
  }
});
