//1)
function sumAndCount(){
let sum = 0;
let count = 0;
  for (let i = 1; i <= 99; i++) {
    if(i % 2 == 0){
      sum += i;
      count++;
    }
  }
console.log(sum);
console.log(count);
}
console.log(sumAndCount());



//2)
//check 1, check 2, check every number(i++) than devide our number.
function isNumPrime(number){
  if(!number && number != 0){
    return "type an argument"
  }

  if(typeof number !== "number"){
    return "Please type a number";
  }
  if(number === 1 || number === 0){
    return "Neither complex nor prime";
  }else{
    for (let i = 2; i < number; i++){
      if(number % i === 0){
        return "The number is Complex"
      }
    }
    return "The number is Prime"
  }

}
console.log("isNumPrime", isNumPrime(17));





//3)
// num = i * i 16 = 4 * 4 Warning!!!
function quadrateRoot(num){
  if(!num && num != 0){
    return "type an argument"
  }

  if(typeof num !== "number"){
    return "Please type a number";
  }
  for (let i = 0; i <= num; i++){
    if (i * i === num){
      return i;
    }
  }
      return "there are no quadrateroot";
    }
console.log("quadrateRoot",quadrateRoot(49));





//4)
// n*(n-1)*(n-2)*(n-3)...
function factorial(n){
  if(!n && n != 0){
    return "type an argument"
  }

  if(typeof n !== "number"){
    return "Please type a number";
  }
  let res = 1;
  for (let i = 0; i < n; i++){
    res = res * (n-i);
  }
  return res;
}
console.log(factorial(5));




//5)
function sumOfGivenNum (number) {
  if(!number && number != 0){
    return "type an argument"
  }

  if(typeof number !== "number"){
    return "Please type a number";
  }

  let toStr = "" + number
  let sum = 0

  for (let i = 0; i < toStr.length; i++)
    sum += +toStr[i];

  return sum;
}
console.log("sumOfGivenNum", sumOfGivenNum(1234));



//6)
function flipNum(n){
  if(!n && n != 0){
    return "type an argument"
  }

  if(typeof n !== "number"){
    return "Please type a number";
  }

    let digit;
    let result = 0

    while(n){
        digit = n % 10
        result = (result * 10) + digit
        n = n/10|0 // remove last number from right
    }

    return result;
}
console.log("flipNum", flipNum(123));
