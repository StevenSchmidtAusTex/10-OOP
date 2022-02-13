
const engineer = require('../lib/engineer');

describe('Engineer class', () => {
    it('getName should return Employee name', () => {
        expect(new engineer('Steven Schmidt', 3, 'stevenS@hotmail.com', 'StevenSchmidtAusTex').getName()).toBe('Steven Schmidt');
    });

    it('getId should return Employee ID', () => {
        expect(new engineer('Steven Schmidt', 3, 'stevenS@hotmail.com', 'StevenSchmidtAusTex').getId()).toBe(3);
    });

    it('getEmail should return Employee email', () => {
        expect(new engineer('Steven Schmidt', 3, 'stevenS@hotmail.com', 'StevenSchmidtAusTex').getEmail()).toBe('stevenS@hotmail.com');
    });

    it('getGithub should return Engineer GitHub username', () => {
        expect(new engineer('Steven Schmidt', 3, 'stevenS@hotmail.com', 'StevenSchmidtAusTex').getGithub()).toBe('StevenSchmidtAusTex');
    });

    it('getRole should now return Engineer', () => {
        expect(new engineer('Steven Schmidt', 3, 'stevenS@hotmail.com', 'StevenSchmidtAusTex').getRole()).toBe('Engineer');
    });
});