const Shapes = require('./shapes');

class Triangle extends Shapes {
   
    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,200 300,200 150,0" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75" x="172">${this.text}</text>
        </svg>`

    }
};

module.exports = Triangle;