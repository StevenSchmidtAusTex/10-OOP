
const employee = require('../lib/employee');

describe('Employee class', () => {
    it('getName should return Employee name', () => {
        expect(new employee('Steven Schmidt', 3, 'stevenS@hotmail.com').getName()).toBe('Steven Schmidt');
    });

    it('getId should return Employee ID', () => {
        expect(new employee('Steven Schmidt', 3, 'stevenS@hotmail.com').getId()).toBe(3);
    });

    it('getEmail should return Employee email', () => {
        expect(new employee('Steven Schmidt', 3, 'stevenS@hotmail.com').getEmail()).toBe('stevenS@hotmail.com');
    });

    it('getRole should return Employee', () => {
        expect(new employee('Steven Schmidt', 3, 'stevenS@hotmail.com').getRole()).toBe('Employee');
    });
});