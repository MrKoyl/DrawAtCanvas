const Point = require('./Point');

module.exports = class Edge{
    constructor(x1, y1, x2, y2){
        this.start = new Point(x1, y1);
        this.end = new Point(x2, y2);
    }
};