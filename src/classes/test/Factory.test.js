const Factory = require('../Factory');

describe('class Factory', () => {

    describe('createPoint', () => {

        describe('creates Point with', () => {

            test('all params', () => {
                const point = Factory.createPoint({x: 1, y: 1});
                const result = {x: point.x, y: point.y};
                const expected = {x: 1, y: 1};
                expect(result).toMatchObject(expected);
            });

            test('x param', () => {
                const point = Factory.createPoint({x: 1});
                const result = {x: point.x, y: point.y};
                const expected = {x: 1, y: 0};
                expect(result).toMatchObject(expected);
            });

            test('y param', () => {
                const point = Factory.createPoint({y: 1});
                const result = {x: point.x, y: point.y};
                const expected = {x: 0, y: 1};
                expect(result).toMatchObject(expected);
            });

            test('no params', () => {
                const point = Factory.createPoint();
                const result = {x: point.x, y: point.y};
                const expected = {x: 0, y: 0};
                expect(result).toMatchObject(expected);
            });

            test('Point param', () => {
                const pointToCopy = Factory.createPoint({x: 1, y: 1});
                const point = Factory.createPoint(pointToCopy);
                const result = {x: point.x, y: point.y};
                const expected = {x: 1, y: 1};
                expect(result).toMatchObject(expected);
            })
        });

        test('throws exception', () => {
            const wrongParam = "Wrong";
            expect(() => {
                Factory.createPoint(wrongParam)
            }).toThrow('Wrong Point creation param')
        })
    });

    describe('createEdge', () => {

        describe('creates Edge with', () => {

            test('all params', () => {
                const edge = Factory.createEdge({x1: 1, y1: 1, x2: 2, y2: 2});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 1, y1: 1, x2: 2, y2: 2};
                expect(result).toMatchObject(expected);
            });

            test('start point params', () => {
                const edge = Factory.createEdge({x1: 1, y1: 1});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 1, y1: 1, x2: 0, y2: 0};
                expect(result).toMatchObject(expected);
            });

            test('end points params', () => {
                const edge = Factory.createEdge({x2: 2, y2: 2});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 0, y1: 0, x2: 2, y2: 2};
                expect(result).toMatchObject(expected);
            });

            test('start x param', () => {
                const edge = Factory.createEdge({x1: 1});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 1, y1: 0, x2: 0, y2: 0};
                expect(result).toMatchObject(expected);
            });

            test('start y param', () => {
                const edge = Factory.createEdge({y1: 1});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 0, y1: 1, x2: 0, y2: 0};
                expect(result).toMatchObject(expected);
            });

            test('end x param', () => {
                const edge = Factory.createEdge({x2: 2});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 0, y1: 0, x2: 2, y2: 0};
                expect(result).toMatchObject(expected);
            });

            test('end y param', () => {
                const edge = Factory.createEdge({y2: 2});
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 0, y1: 0, x2: 0, y2: 2};
                expect(result).toMatchObject(expected);
            });

            test('Edge param', () => {
                const edgeToCopy = Factory.createEdge({x1: 1, y1: 1, x2: 2, y2: 2});
                const edge = Factory.createEdge(edgeToCopy);
                const result = {x1: edge.start.x, y1: edge.start.y, x2: edge.end.x, y2: edge.end.y};
                const expected = {x1: 1, y1: 1, x2: 2, y2: 2};
                expect(result).toMatchObject(expected);
            })
        });

        describe('throws for', () => {

            test('no args', () => {
                expect(() => {
                    Factory.createEdge()
                }).toThrow('No arguments');
            });

            test('wrong param', () => {
                const wrongParam = "Wrong";
                expect(() => {
                    Factory.createEdge(wrongParam)
                }).toThrow('Points are equal or wrong Edge creation param given');
            });
        })
    });

    describe('createFigure', () => {

        describe('creates Figure with', () => {

            test('params', () => {
                const edge = Factory.createEdge({x1: 1});
                const figure = Factory.createFigure([edge]);
                const result = {array: figure.edges};
                const expected = {array: [{start: {x: 1, y: 0}, end: {x: 0, y: 0}}]};
                expect(result).toMatchObject(expected);
            });

            test('Figure param', () => {
                const edge = Factory.createEdge({x1: 1});
                const figureToCopy = Factory.createFigure([edge]);
                const figure = Factory.createFigure(figureToCopy);
                const result = {array: figure.edges};
                const expected = {array: [{start: {x: 1, y: 0}, end: {x: 0, y: 0}}]};
                expect(result).toMatchObject(expected);
            });
        });

        describe('throws for', () => {

            test('no args', () => {
                expect(() => {Factory.createFigure()}).toThrow('No arguments')
            });

            test('wrong param', () => {
                const wrongParam = "Wrong";
                expect(() => {
                    Factory.createFigure(wrongParam)
                }).toThrow('Wrong Figure creation param');
            });
        })
    })
});