function sumElementsOddIndex(myArray) {
  if (!Array.isArray(myArray)) {
    return "Please type an array";
  }
  let sumWithOddIndex = 0;
  let oddElementIndex = 0;

  for (let i = 0; i < myArray.length; i++) {
    if ((oddElementIndex = i % 2 !== 0)) {
      sumWithOddIndex += i;
    }
  }
  return sumWithOddIndex;
}

//1)
function getMaxValue(myArray) {
  if (!Array.isArray(myArray)) {
    return "Please type an array";
  }

  let maxValue = myArray[0];
  for (let i = 0; i < myArray.length; i++) {
    if (maxValue < myArray[i]) {
      maxValue = myArray[i];
    }
  }
  return maxValue;
}

//2)
function getMinValue(myArray) {
  if (!Array.isArray(myArray)) {
    return "Please type an array";
  }
  let minValue = myArray[0];
  for (let i = 0; i < myArray.length; i++) {
    if (minValue > myArray[i]) {
      minValue = myArray[i];
    }
  }
  return minValue;
}

//3)
function getMaxValueIndex(myArray) {
  if (!Array.isArray(myArray)) {
    return "Please type an array";
  }
  let maxValueIndex = 0;
  let maxValue = myArray[0];
  for (let i = 0; i < myArray.length; i++) {
    if (maxValue < myArray[i]) {
      maxValue = myArray[i];
      maxValueIndex = i;
    }
  }
  return maxValueIndex;
}

//4)
function getMinValueIndex(myArray) {
  if (!Array.isArray(myArray)) {
    return "type array";
  }
  let minValueIndex = 0;
  let minValue = myArray[0];
  for (let i = 0; i < myArray.length; i++) {
    if (minValue > myArray[i]) {
      minValue = myArray[i];
      minValueIndex = i;
    }
  }
  return minValueIndex;
}

//6)
function getReverseArr(arr) {
  if (!Array.isArray(arr)) {
    return "type array";
  }

  let temp = 0;
  for (let i = 0; i <= arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i]; //find last element in array
    arr[arr.length - 1 - i] = temp; // mid element
  }
  return arr;
}

//7)
function countOddElements(arr) {
  if (!Array.isArray(arr)) {
    return "type array";
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}

//8)
function reversArr(arr) {
  if (!Array.isArray(arr)) {
    return "type array";
  }

  let halfLen = arr.length / 2;
  let centrePos = halfLen + (arr.length % 2);
  for (let i = 0; i < halfLen; i++) {
    let t = arr[i];
    arr[i] = arr[centrePos + i];
    arr[centrePos + i] = t;
  }
  return arr;
}

//9)
function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    return "type array";
  }

  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
  }
  return arr;
}

module.exports = {
  sumElementsOddIndex,
  getMaxValue,
  getMinValue,
  getMaxValueIndex,
  countOddElements,
  bubbleSort,
  getMinValueIndex,
  reversArr,
  getReverseArr,
};
