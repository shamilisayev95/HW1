//1)
function getMaxValue(myArray){
  if(!Array.isArray(myArray)){
      return "type array";
    };

    let maxValue = myArray[0];
    for (let i = 0; i < myArray.length; i++) {

        if (maxValue < myArray[i]){
        	maxValue = myArray[i];
        }
    }
    return maxValue;
}
console.log("getMaxValue", getMaxValue([1,2,56,75,22,11,15]));


//2)
function getMinValue(myArray){
  if(!Array.isArray(myArray)){
      return "type array";
    };
    let minValue = myArray[0];
    for (let i = 0; i < myArray.length; i++) {

        if (minValue > myArray[i]){
        	minValue = myArray[i];
        }
    }
    return minValue;
}
console.log("getMinValue", getMinValue([1,2,56,75,22,11,15]));




//3)
function getMaxValueIndex(myArray){
  if(!Array.isArray(myArray)){
      return "type array";
    };
    let maxValueIndex = 0;
    let maxValue = myArray[0];
    for (let i = 0; i < myArray.length; i++) {

        if (maxValue < myArray[i]){
        	maxValue = myArray[i];
          maxValueIndex = i;
        }
    }
    return maxValueIndex;
}
console.log("getMaxValueIndex", getMaxValueIndex([1,2,56,75,22,11,15]));



//4)
function getMinValueIndex(myArray){
  if(!Array.isArray(myArray)){
      return "type array";
    };
  let minValueIndex = 0;
  let minValue = myArray[0];
    for (let i = 0; i < myArray.length; i++) {

        if (minValue > myArray[i]){
        	minValue = myArray[i];
          minValueIndex = i;
        }
    }
    return minValueIndex;
}
console.log("getMinValueIndex", getMinValueIndex([1,2,56,75,22,11,15]));


//5)
function sumElementsOddIndex(myArray){
  if(!Array.isArray(myArray)){
      return "type array";
    };
  let sumWithOddIndex=0;
  for (var i = 0; i < myArray.length; i+=2) {
      oddElementIndex = i % 2;
      sumWithOddIndex++;
  }
  return sumWithOddIndex-1;
}
console.log("sumElementsOddIndex", sumElementsOddIndex([1,7,32,8,1]));


//6)
function getReverseArr(arr){
  if(!Array.isArray(arr)){
    return "type array"
  };

  let temp = 0;
  for(let i = 0; i <= arr.length/2; i++){
          temp = arr[i];
          arr[i] = arr[arr.length - 1 - i]; //find last element in array
          arr[arr.length - 1 - i] = temp; // mid element
  }
  return arr;
}
console.log("getReverseArr", getReverseArr([1,2,3,5,6]));


//7)
function countOddElements(arr){
  if(!Array.isArray(arr)){
    return "type array"
  };

  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){

    }else{
      count++;
    }
  }
  return count;
}
console.log("countOddElements", countOddElements([1,3,2,7]));



//8)
function reversArr(arr){
  if(!Array.isArray(arr)){
    return "type array"
  };

  let halfLen = arr.length / 2;
  let centrePos = halfLen + arr.length % 2;
  for (var i = 0; i < halfLen; i++) {
    let t = arr[i];
    arr[i] = arr[centrePos + i];
    arr[centrePos + i] = t;
  }
  return arr;
}
console.log("reversArr", reversArr([1,2,3,4]));


//9)
function bubbleSort(arr) {
  if(!Array.isArray(arr)){
    return "type array"
  };

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
console.log("bubbleSort", bubbleSort([1,7,4,9,2,5,6]));
