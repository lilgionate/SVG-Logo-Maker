const Square = require("../lib/Square");
const Triangle = require("../lib/Triangle");
const Circle = require("../lib/Circle");

const generateLogo = (data) => {
    const shape = 
      data.shape === 'triangle' ? new Triangle(data.shape_color, data.text, data.text_color) :
      data.shape === 'square' ? new Square(data.shape_color, data.text, data.text_color) :
      new Circle(data.shape_color, data.text, data.text_color);
  
    return shape.render();
};

module.exports = generateLogo;