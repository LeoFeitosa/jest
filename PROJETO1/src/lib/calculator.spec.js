const { sum } = require('./calculator');

it('should soma 2 e 2 e deve resultar 4', () => {
    expect(sum(2, 2)).toBe(4);
});

it('should os numeros não podem ser strings', () => {
    expect(sum('2', '2')).toBe(4);
});

it('should os numeros devem ser somaveis', () => {
    expect(() => {
        sum('', '2')
    }).toThrowError();
});

it('should os numeros devem ser somaveis', () => {
    expect(() => {
        sum([2, 2])
    }).toThrowError();
});

it('should os numeros devem ser somaveis', () => {
    expect(() => {
        sum({})
    }).toThrowError();
});