const HardWorkingService = require('./../js/hard-working.service.js');

describe('HeavyWork Service Tests', () => {
    let hardWorkingService;
    beforeEach(() => {
        hardWorkingService = new HardWorkingService();
    });

    it('getUserData should return a User object', () => {
        hardWorkingService.getUserData().then(userData => {
            expect(userData).not.toBeUndefined(null);
            expect(userData.name).toBeDefined();
            expect(userData.age).toBeDefined();
        });
    });

    it('isEmail should validate emails correctly', () => {
        expect(hardWorkingService.isEmail())
            .toBe(false);
        expect(hardWorkingService.isEmail(undefined))
            .toBe(false);
        expect(hardWorkingService.isEmail(null))
            .toBe(false);
        expect(hardWorkingService.isEmail({}))
            .toBe(false);
        expect(hardWorkingService.isEmail(''))
            .toBe(false);
        expect(hardWorkingService.isEmail('abc'))
            .toBe(false);
        expect(hardWorkingService.isEmail(123))
            .toBe(false);
        expect(hardWorkingService.isEmail('@'))
            .toBe(false);
        expect(hardWorkingService.isEmail('a@a.a'))
            .toBe(false);
        expect(hardWorkingService.isEmail('abc@acb.abc'))
            .toBe(false);
        expect(hardWorkingService.isEmail('abc@abc.com'))
            .toBe(true);
    });
})