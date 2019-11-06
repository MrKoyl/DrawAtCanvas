const Canvas = require('./classes/Canvas');

const canvasHTML = document.getElementById('myCanvas');
const canvasParams = {
    width: 750,
    height: 750,
    backgroundColor: 'white',
    scroll: 50,
    gridColor: 'black',
    centerX: 0,
    centerY: 0
};
const myCanvas = new Canvas(canvasHTML, canvasParams, true);