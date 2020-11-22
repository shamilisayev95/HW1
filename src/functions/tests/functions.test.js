const { assert } = require('chai');
const functions = require("../Function.js");

describe("functions methods", () => {
    describe("dayOfWeek", () => {

        it("should return undefined", () => {

            const arg = "";

            const actual = functions.dayOfWeek(arg);

            assert.isUndefined(actual);
        })

        it("should return Weekday", () => {

            const arg = 1;
            const expected = "Monday";

            const actual = functions.dayOfWeek(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return type right day", () => {

            const arg = 18;
            const expected = "type right day";

            const actual = functions.dayOfWeek(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return undefined", () => {

            const arg = 0;

            const actual = functions.dayOfWeek(arg);

            assert.isUndefined(actual);
        })
    })


    describe("getDistance", () => {

        it("should return Not a number", () => {

            const arg = "";

            const actual = functions.getDistance(arg);

            assert.isNaN(actual);
        })
    })


    describe("nameOfNumber", () => {

        it("should return undefined", () => {

            const arg = "";

            const actual = functions.nameOfNumber(arg);

            assert.isUndefined(actual);
        })

        it("should return right day", () => {

            const arg = 18;
            const expected = "восемнадцать";

            const actual = functions.nameOfNumber(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return right day", () => {

            const arg = 25;
            const expected = "двадцать пять";

            const actual = functions.nameOfNumber(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return undefined", () => {

            const arg = 0;

            const actual = functions.nameOfNumber(arg);

            assert.isUndefined(actual);
        })


    })
})