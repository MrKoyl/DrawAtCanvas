const Figure = require('../Figure');

describe('class Figure', () => {
    test('is created', () => {
        const result = new Figure();
        expect(result).toBeInstanceOf(Figure);
    });
});