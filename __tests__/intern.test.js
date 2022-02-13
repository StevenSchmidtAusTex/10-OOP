
const intern = require('../lib/intern');

describe('Intern class', () => {
    it('getName should return Employee name', () => {
        expect(new intern('Steven Schmidt', 3, 'stevenS@hotmail.com', 'UT Austin').getName()).toBe('Steven Schmidt');
    });

    it('getId should return Employee ID', () => {
        expect(new intern('Steven Schmidt', 3, 'stevenS@hotmail.com', 'UT Austin').getId()).toBe(3);
    });

    it('getEmail should return Employee email', () => {
        expect(new intern('Steven Schmidt', 3, 'stevenS@hotmail.com', 'UT Austin').getEmail()).toBe('stevenS@hotmail.com');
    });

    it('getSchool should return Intern school name', () => {
        expect(new intern('Steven Schmidt', 3, 'stevenS@hotmail.com', 'UT Austin').getSchool()).toBe('UT Austin');
    });

    it('getRole should now return Intern', () => {
        expect(new intern('Steven Schmidt', 3, 'stevenS@hotmail.com', 'UT Austin').getRole()).toBe('Intern');
    });
});