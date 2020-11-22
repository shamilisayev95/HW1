const { assert } = require('chai');
const loop = require("../Loop.js");


describe("Loops methods", () => {
    describe("isNumPrime", () => {

        it("should return NotNumber", () => {

            const arg = "";
            const expected = "type an argument";

            const actual = loop.isNumPrime(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return isNumPrime", () => {

            const arg = 17;
            const expected = "The number is Prime";

            const actual = loop.isNumPrime(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return isNumComplex", () => {

            const arg = 18;
            const expected = "The number is Complex";

            const actual = loop.isNumPrime(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return isZero", () => {

            const arg = 0;
            const expected = "Neither complex nor prime";

            const actual = loop.isNumPrime(arg);

            assert.deepEqual(actual, expected);
        })
    })


    describe("factorial", () => {

        it("should return NotNumber", () => {

            const arg = "";
            const expected = "type an argument";

            const actual = loop.factorial(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return factorial", () => {

            const arg = 4;
            const expected = 24;

            const actual = loop.factorial(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return factorial", () => {

            const arg = 7;

            const actual = loop.factorial(arg);

            assert.isNotNaN(actual);
        })

        it("should return 1", () => {

            const arg = 0;
            const expected = 1;

            const actual = loop.factorial(arg);

            assert.deepEqual(actual, expected);
        })
    })


    describe("sumOfGivenNum", () => {

        it("should return NotNumber", () => {

            const arg = "";
            const expected = "type an argument";

            const actual = loop.sumOfGivenNum(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return sumOfGivenNum", () => {

            const arg = 1234;
            const expected = 10;

            const actual = loop.sumOfGivenNum(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return sumOfGivenNum", () => {

            const arg = 0;

            const actual = loop.sumOfGivenNum(arg);

            assert.isNotNaN(actual);
        })

        it("should return 0", () => {

            const arg = 0;
            const expected = 0;

            const actual = loop.sumOfGivenNum(arg);

            assert.deepEqual(actual, expected);
        })
    })


    describe("quadrateRoot", () => {

        it("should return quadrateRoot", () => {

            const arg = 5;
            const expected = "there are no quadrateroot";

            const actual = loop.quadrateRoot(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return quadrateRoot", () => {

            const arg = 25;
            const expected = 5;

            const actual = loop.quadrateRoot(arg);

            assert.deepEqual(actual, expected);
        })

        it("should return quadrateRoot", () => {

            const arg = 0;

            const actual = loop.quadrateRoot(arg);

            assert.isNotNaN(actual);
        })

    })

});