Lumi.register("Template", {
  components: ["header","information","countdown","character","buttons"],
  render() { this.components.forEach(name => Lumi.Registry.render(name)); }
});
