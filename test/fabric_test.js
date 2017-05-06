describe("fabric", function () {
  fabric = require('fabric').fabric;

  it("creates a canvas with a circle", function () {
    var canvas = fabric.createCanvasForNode();
    var circle = new fabric.Circle();
    canvas.add(circle);
    expect(canvas.getObjects()).toEqual([circle]);
  });
});