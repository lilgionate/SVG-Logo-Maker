const Shapes = require('./shapes');

class Square extends Shapes {

    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <rect x="250" y="250" width="250" height="250" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="100" y='180' x="80">${this.text}</text>
        </svg>`

    }
};

module.exports = Square;