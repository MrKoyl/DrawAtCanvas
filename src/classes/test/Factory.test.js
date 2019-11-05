const Factory = require('../Factory');

const factory = Factory();

describe('class Factory', () => {

    describe('creates Point with', () => {

        test('all params', () => {
            const point = factory.createPoint({x: 1, y: 1});
            const result = {x: point.x, y: point.y};
            const expected = {x: 1, y: 1};
            expect(result).toMatchObject(expected);
        });

        test('x param', () => {
            const point = factory.createPoint({x: 1});
            const result = {x: point.x, y: point.y};
            const expected = {x: 1, y: 0};
            expect(result).toMatchObject(expected);
        });

        test('y param', () => {
            const point = factory.createPoint({y: 1});
            const result = {x: point.x, y: point.y};
            const expected = {x: 0, y: 1};
            expect(result).toMatchObject(expected);
        });

        test('no params', () => {
            const point = factory.createPoint();
            const result = {x: point.x, y: point.y};
            const expected = {x: 0, y: 0};
            expect(result).toMatchObject(expected);
        });

        test('Point param', () => {
            const pointToCopy = factory.createPoint({x: 1, y: 1});
            const point = factory.createPoint(pointToCopy);
            const result = {x: point.x, y: point.y};
            const expected = {x: 1, y: 1};
            expect(result).toMatchObject(expected);
        })
    });

    test('throws exception', () => {
        const wrongParam = "Wrong";
        expect(() => {
            factory.createPoint(wrongParam)
        }).toThrow('Wrong point creation params')
    })
});