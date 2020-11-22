const { assert } = require('chai');
const array = require("../Arrays.js");



describe("Arrays methods", () => {
    describe("sumElementsOddIndex",() => {

        it("should return array", () => {

            const arg = "";
            const expected = "Please type an array";

            const actual = array.sumElementsOddIndex(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return Zero', () => {
            const arg = [];
            const expected = 0;

            const actual = array.sumElementsOddIndex(arg);

            assert.deepEqual(actual, expected);
        });

        it('should return 0', () => {
            const arg = [55];
            const expected = 0;

            const actual = array.sumElementsOddIndex(arg);

            assert.deepEqual(actual, expected);
        });

        it('should return sumElementsOddIndex', () => {
            const arg = [1, 2323, 5434, 5745, 423432, 3123];
            const expected = 9;

            const actual = array.sumElementsOddIndex(arg);

            assert.deepEqual(actual, expected);
        });
    })

    describe("getMaxValue",() =>{

        it("should return array", () => {

            const arg = "";
            const expected = "Please type an array";

            const actual = array.getMaxValue(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return undefined', () => {
            const arg = [];

            const actual = array.getMaxValue(arg);

            assert.isUndefined(actual);
        });

        it('should return MaxValue', () => {
            const arg = [1,2,75,22,15];
            const expected = 75;

            const actual = array.getMaxValue(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return MaxValue', () => {
            const arg = [42];
            const expected = 42;

            const actual = array.getMaxValue(arg);

            assert.deepEqual(actual, expected);
        })
    })

    describe("getMinValue",() =>{

        it("should return array", () => {

            const arg = "";
            const expected = "Please type an array";

            const actual = array.getMinValue(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return undefined', () => {
            const arg = [];

            const actual = array.getMinValue(arg);

            assert.isUndefined(actual);
        });

        it('should return MinValue', () => {
            const arg = [1,2,75,22,15];
            const expected = 1;

            const actual = array.getMinValue(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return MinValue', () => {
            const arg = [42];
            const expected = 42;

            const actual = array.getMinValue(arg);

            assert.deepEqual(actual, expected);
        })
    })

    describe("getMaxValueIndex",() => {

        it("should return array", () => {

            const arg = "";
            const expected = "Please type an array";

            const actual = array.getMaxValueIndex(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return MaxValueIndex', () => {
            const arg = [];
            const expected = 0;

            const actual = array.getMaxValueIndex(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return MaxValueIndex', () => {
            const arg = [1,2,75,22,15];
            const expected = 2;

            const actual = array.getMaxValueIndex(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return MaxValueIndex', () => {
            const arg = [42];
            const expected = 0;

            const actual = array.getMaxValueIndex(arg);

            assert.deepEqual(actual, expected);
        })
    })

    describe("reversArr",() =>{

        it("should return array", () => {

            const arg = "";
            const expected = "type array";

            const actual = array.reversArr(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return reversed array', () => {
            const arg = [1, 2, 3, 4, 5, 6];
            const expected = [4, 5, 6, 1, 2, 3];

            const actual = array.reversArr(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return reversed array', () => {
            const arg = [41,12];
            const expected = [12,41];

            const actual = array.reversArr(arg);

            assert.deepEqual(actual, expected);
        })
    })

    describe("getReverseArr",() => {

        it("should return array", () => {

            const arg = "";
            const expected = "type array";

            const actual = array.getReverseArr(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return reversed array', () => {
            const arg = [1, 2, 3];
            const expected = [3, 2, 1];

            const actual = array.getReverseArr(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return reversArr', () => {
            const arg = [-12, 12, 1, 3, 2, 24];
            const expected = [24, 2, 1, 3, 12, -12];

            const actual = array.getReverseArr(arg);

            assert.deepEqual(actual, expected);
        })
    })

    describe("getMinValueIndex",() => {

        it("should return array", () => {

            const arg = "";
            const expected = "type array";

            const actual = array.getMinValueIndex(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return 0', () => {
            const arg = [];
            const expected = 0;

            const actual = array.getMinValueIndex(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return minValIn', () => {
            const arg = [1, 2, 75, 22, 15];
            const expected = 0;

            const actual = array.getMinValueIndex(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return minValIn', () => {
            const arg = [42];
            const expected = 0;

            const actual = array.getMinValueIndex(arg);

            assert.deepEqual(actual, expected);
        })
    })

    describe("countOddElements",() =>{

        it("should return array", () => {

            const arg = "";
            const expected = "type array";

            const actual = array.countOddElements(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return countOddElements', () => {
            const arg = [];
            const expected = 0;

            const actual = array.countOddElements(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return countOddElements', () => {
            const arg = [1, 2, 5, 2, 3];
            const expected = 3;

            const actual = array.countOddElements(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return countOddElements', () => {
            const arg = [42];
            const expected = 0;

            const actual = array.countOddElements(arg);

            assert.deepEqual(actual, expected);
        })
    })


    describe("bubbleSort",() =>{

        it("should return array", () => {

            const arg = "";
            const expected = "type array";

            const actual = array.bubbleSort(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return array', () => {
            const arg = [];
            const expected = [];

            const actual = array.bubbleSort(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return array', () => {
            const arg = [1, 2, 5, 4, 3];
            const expected = [1, 2, 3, 4, 5];

            const actual = array.bubbleSort(arg);

            assert.deepEqual(actual, expected);
        })

        it('should return array', () => {
            const arg = [3, -1, 0, 24, 55];
            const expected = [-1, 0, 3, 24, 55];

            const actual = array.bubbleSort(arg);

            assert.deepEqual(actual, expected);
        })
    })

})

