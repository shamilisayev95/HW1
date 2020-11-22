const { assert } = require('chai');
const conditional = require("../Conditional.js");


describe("conditional methods", () => {
    describe("scoreRaiting", () => {

        it("should return type an number", () => {

            const arg = "";
            const expected = "Please type a number";

            const actual = conditional.scoreRaiting(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return scoreRaiting", () => {

            const arg = 56;
            const expected = "D";

            const actual = conditional.scoreRaiting(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return scoreRaiting", () => {

            const arg = 92;
            const expected = "A";

            const actual = conditional.scoreRaiting(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return scoreRaiting", () => {

            const arg = 0;
            const expected = "F";

            const actual = conditional.scoreRaiting(arg);

            assert.deepEqual(actual, expected);
        })
    })

    describe("getSumIsEvenNum", () => {

        it("should return type an argument", () => {

            const arg = "";
            const expected = "type an argument";

            const actual = conditional.getSumIsEvenNum(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return sum", () => {

            const arg = 3
            const arg2 = 5
            const expected = 8;

            const actual = conditional.getSumIsEvenNum(arg, arg2);

            assert.deepEqual(actual, expected);
        })

        it("should return multiplication", () => {

            const arg = 2;
            const arg2 = 4
            const expected = 8;

            const actual = conditional.getSumIsEvenNum(arg, arg2);

            assert.deepEqual(actual, expected);
        })

        it("should return 0", () => {

            const arg = 0;
            const arg2 = 4
            const expected = 0;

            const actual = conditional.getSumIsEvenNum(arg, arg2);

            assert.deepEqual(actual, expected);
        })
    })

    describe("cordinateQuarterFinder", () => {

        it("should return type an argument", () => {

            const arg = "";
            const expected = "type an argument";

            const actual = conditional.cordinateQuarterFinder(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return Finding quarter", () => {

            const arg = 3
            const arg2 = 5
            const expected = "1 quarter";

            const actual = conditional.cordinateQuarterFinder(arg, arg2);

            assert.deepEqual(actual, expected);
        })

        it("should return Finding quarter", () => {

            const arg = -2;
            const arg2 = 4
            const expected = "2 quarter";

            const actual = conditional.cordinateQuarterFinder(arg, arg2);

            assert.deepEqual(actual, expected);
        })

        it("should return 0 line", () => {

            const arg = 0;
            const arg2 = 0;
            const expected = "On the 0 line";

            const actual = conditional.cordinateQuarterFinder(arg, arg2);

            assert.deepEqual(actual, expected);
        })

        it("should return on axis", () => {

            const arg = 0;
            const arg2 = 5;
            const expected = "On the axis";

            const actual = conditional.cordinateQuarterFinder(arg, arg2);

            assert.deepEqual(actual, expected);
        })
    })

    describe("findMax", () => {

        it("should return type an argument", () => {

            const arg = "";
            const expected = "type an argument";

            const actual = conditional.findMax(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return multiplication + 3", () => {

            const arg = 3;
            const arg2 = 5;
            const arg3 = 2;
            const expected = 33;

            const actual = conditional.findMax(arg, arg2, arg3);

            assert.deepEqual(actual, expected);
        })

        it("should return (a+b+c) + 3", () => {

            const arg = 2;
            const arg2 = 4;
            const arg3 = -2;
            const expected = 7;

            const actual = conditional.findMax(arg, arg2, arg3);

            assert.deepEqual(actual, expected);
        })

        it("should return need third argument", () => {

            const arg = 0;
            const arg2 = 4
            const expected = "type an argument";

            const actual = conditional.findMax(arg, arg2);

            assert.deepEqual(actual, expected);
        })
    })

})












