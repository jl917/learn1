const {isNull} = require('../validator')

describe('isNull', () => {
    test(`""`, () => {
        expect(isNull("")).toBe(false);
    });
    test(`"text"`, () => {
        expect(isNull("text")).toBe(true);
    });
    test(`"   text   "`, () => {
        expect(isNull("   text   ")).toBe(true);
    });
    test(`"      "`, () => {
        expect(isNull("      ")).toBe(false);
    });
    test(`"汉字测试"`, () => {
        expect(isNull("汉字测试")).toBe(true);
    });
    test(`"한글"`, () => {
        expect(isNull("한글")).toBe(true);
    });
    test(`{a:1}`, () => {
        expect(isNull({a:1})).toBeUndefined();
    });
    test(`[1,2,3]`, () => {
        expect(isNull([1,2,3])).toBeUndefined();
    });
    test(`0`, () => {
        expect(isNull(0)).toBeUndefined();
    });  
})