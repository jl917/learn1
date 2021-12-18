const {isData} = require('../validator')

describe('isData', () => {
    test(`""`, () => {
        expect(isData("")).toBe(false);
    });

    test(`"2016"`, () => {
        expect(isData("2016")).toBe(false);
    });

    test(`"20160909"`, () => {
        expect(isData("20160909")).toBe(false);
    });

    test(`"8999-99-12"`, () => {
        expect(isData("8999-99-12")).toBe(true);
    });
})