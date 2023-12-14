const Shapes = require('./shapes');

class Square extends Shapes {

    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <rect x="250" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75" x="172">${this.text}</text>
        </svg>`

    }
};

module.exports = Square;