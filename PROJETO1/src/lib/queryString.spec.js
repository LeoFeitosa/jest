const { queryString } = require('./queryString');

describe('Objeto em string', () => {
    it('should criar uma query string valida com um objeto', () => {
        const obj = {
            name: 'Leonardo',
            profession: 'Developer'
        }

        expect(queryString(obj)).toBe(
            'name=Leonardo&profession=Developer'
        );
    });
});