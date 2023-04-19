// A testing suite for shapes is created.
describe("Shapes", () => {
  // A test is created to check that when we choose blue for triangle shape it returns the correct string for the svg file.
  describe("sum", () => {
    it("should create the string with polyon points of triangle and set fill to blue in that string", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="50, 187 250, 187 150, 13" fill="blue"/>'
      );
    });
  });
});
