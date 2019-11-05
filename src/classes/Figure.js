module.exports = class Figure {
    constructor(edges){
        this.edges = (edges || []).slice();
    }
};