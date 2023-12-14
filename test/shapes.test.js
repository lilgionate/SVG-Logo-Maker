// test/test.js
const assert = require('assert');
const generateLogo = require('../utils/generateLogo');

// Mock classes for testing
class MockShape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    return `<svg>${this.color}${this.text}${this.textColor}</svg>`;
  }
}

// Mock classes for testing
class MockSquare extends MockShape {}
class MockTriangle extends MockShape {}
class MockCircle extends MockShape {}

// Mock data for testing
const testData = {
  shape: 'Shapes',
  shape_color: 'color',
  text: '',
  text_color: 'color',
};

// Test generateLogo function
describe('generateLogo', function () {
  it('should generate SVG markup for Circle', function () {
    const result = generateLogo(testData);
    assert.strictEqual(result, `<svg>bluelolblack</svg>`);
  });
});