const HardWorkingService = require('./../js/hard-working.service.js');

describe('HeavyWork Service Tests', () => {
    let hardWorkingService;

    beforeEach(() => {
        hardWorkingService = new HardWorkingService();
    });

    it('getUserData() should return a User object', done => {
        hardWorkingService.getUserData().then(userData => {
            expect(userData).not.toBeUndefined(null);
            expect(userData.name).toBeDefined();
            expect(userData.age).toBeDefined();
            done();
        });
    });

    it('isEmail() should validate emails correctly', () => {
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

    it('saveNewUser() should save a new object if name and age are valid', done => {
        let p1 = hardWorkingService.saveNewUser().then(result => {
            expect(result instanceof Error).toBe(true);
        });

        let p2 = hardWorkingService.saveNewUser(1, '2').then(result => {
            expect(result instanceof Error).toBe(true);
        });


        let p3 = hardWorkingService.saveNewUser('User', 20).then(result => {
            expect(result instanceof Error).toBe(false);
        });

        Promise.all([p1,p2,p3]).catch(() => done());
    });

    it('callDependency() should call dependency()', () => {
        spyOn(hardWorkingService, 'dependency');
        hardWorkingService.callDependency();
        expect(hardWorkingService.dependency).toHaveBeenCalled();
    });
})