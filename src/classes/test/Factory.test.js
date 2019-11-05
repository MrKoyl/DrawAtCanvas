const Factory = require('../Factory');

const factory = Factory();

describe('class Factory', () => {

    describe('createPoint', () => {

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
            }).toThrow('Wrong Point creation param')
        })
    });

    describe('createEdge', () => {

        describe('creates Edge with', () => {

            test('all params', () => {
                const edge = factory.createEdge({x1: 1, y1: 1, x2: 2, y2: 2});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 1, y1: 1, x2: 2, y2: 2};
                expect(result).toMatchObject(expected);
            });

            test('start point params', () => {
                const edge = factory.createEdge({x1: 1, y1: 1});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 1, y1: 1, x2: 0, y2: 0};
                expect(result).toMatchObject(expected);
            });

            test('end points params', () => {
                const edge = factory.createEdge({x2: 2, y2: 2});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 0, y1: 0, x2: 2, y2: 2};
                expect(result).toMatchObject(expected);
            });

            test('start x param', () => {
                const edge = factory.createEdge({x1: 1});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 1, y1: 0, x2: 0, y2: 0};
                expect(result).toMatchObject(expected);
            });

            test('start y param', () => {
                const edge = factory.createEdge({y1: 1});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 0, y1: 1, x2: 0, y2: 0};
                expect(result).toMatchObject(expected);
            });

            test('end x param', () => {
                const edge = factory.createEdge({x2: 2});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 0, y1: 0, x2: 2, y2: 0};
                expect(result).toMatchObject(expected);
            });

            test('end y param', () => {
                const edge = factory.createEdge({y2: 2});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 0, y1: 0, x2: 0, y2: 2};
                expect(result).toMatchObject(expected);
            });

            test('Edge param', () => {
                const edgeToCopy = factory.createEdge({x1: 1, y1: 1, x2: 2, y2: 2});
                const edge = factory.createEdge(edgeToCopy);
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 1, y1: 1, x2: 2, y2: 2};
                expect(result).toMatchObject(expected);
            })
        });

        describe('throws for', () => {

            test('no args', () => {
                expect(() => {factory.createEdge()}).toThrow('No arguments');
            });

            test('wrong param', () => {
                const wrongParam = "Wrong";
                expect(() => {factory.createEdge(wrongParam)}).toThrow('Points are equal or wrong Edge creation param given');
            });
        })
    })
});