const Edge = require('../Edge');

describe('class Edge', () => {

    test('is created', () => {
        const result = new Edge();
        expect(result).toBeInstanceOf(Edge);
    });

    test('is created with params', () => {
        const edge = new Edge(1, 1, 2, 2);
        const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
        const expected = {x1: 1, y1: 1, x2: 2, y2: 2};
        expect(result).toMatchObject(expected);
    })
});