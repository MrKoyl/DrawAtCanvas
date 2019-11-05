const Point = require('../Point');

describe('class Point', () => {
    test('is created', () => {
        const result = new Point();
        expect(result).toBeInstanceOf(Point);
    });

    test('is created with params', () => {
        const point = new Point(10, 10);
        const result = {x: point.x, y: point.y};
        const expected = {x: 10, y: 10};
        expect(result).toMatchObject(expected);
    })
});