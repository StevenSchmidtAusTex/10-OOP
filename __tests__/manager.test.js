const manager = require('../lib/manager');

describe('Intern class', () => {
    it('getName should return Employee name', () => {
        expect(new manager('Steven Schmidt', 3, 'stevenS@hotmail.com', '101').getName()).toBe('Steven Schmidt');
    });

    it('getId should return Employee ID', () => {
        expect(new manager('Steven Schmidt', 3, 'stevenS@hotmail.com', '101').getId()).toBe(3);
    });

    it('getEmail should return Employee email', () => {
        expect(new manager('Steven Schmidt', 3, 'stevenS@hotmail.com', '101').getEmail()).toBe('stevenS@hotmail.com');
    });

    it('getOfficeNumber should return Manager office number', () => {
        expect(new manager('Steven Schmidt', 3, 'stevenS@hotmail.com', '101').getOfficeNumber()).toBe('101');
    });

    it('getRole should now return Manager', () => {
        expect(new manager('Steven Schmidt', 3, 'stevenS@hotmail.com', '101').getRole()).toBe('Manager');
    });
});