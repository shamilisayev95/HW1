//1
function getSumIsEvenNum(a, b) {
  if ((!a && a != 0) || (!b && b != 0)) {
    return "type an argument";
  }

  if (typeof a !== "number" && typeof b !== "number") {
    return "Please type a number";
  }

  if (a % 2 == 0) {
    return a * b;
  } else {
    return a + b;
  }
}

//2
function cordinateQuarterFinder(x, y) {
  if ((!x && x != 0) || (!y && y != 0)) {
    return "type an argument";
  }
  if (typeof x !== "number" && typeof y !== "number") {
    return "Please type a number";
  }
  if (x > 0 && y > 0) {
    return "1 quarter";
  } else if (x < 0 && y > 0) {
    return "2 quarter";
  } else if (x < 0 && y < 0) {
    return "3 quarter";
  } else if (x > 0 && y < 0) {
    return "4 quarter";
  } else if (x === 0 && y === 0) {
    return "On the 0 line";
  } else {
    return "On the axis";
  }
}

//3

function scoreRaiting(raiting) {
  if (!raiting && raiting != 0) {
    return "type an argument";
  }
  if (typeof raiting !== "number") {
    return "Please type a number";
  }
  if (raiting >= 0 && raiting <= 19) {
    return "F";
  } else if (raiting >= 20 && raiting <= 39) {
    return "E";
  } else if (raiting >= 40 && raiting <= 59) {
    return "D";
  } else if (raiting >= 60 && raiting <= 74) {
    return "C";
  } else if (raiting >= 75 && raiting <= 89) {
    return "B";
  } else if (raiting >= 90 && raiting <= 100) {
    return "A";
  } else {
    return "Your score have to be in range 0-100";
  }
}

//4

function positivNumberSum(a, b, c) {
  if ((!a && a != 0) || (!b && b != 0) || (!c && c != 0)) {
    return "type an argument";
  }

  if (typeof a !== "number" && typeof b !== "number" && typeof c !== "number") {
    return "Please type a number";
  }
  let sum = 0;

  if (a >= 0) {
    sum = sum + a;
  } else {
    return "a is negative number";
  }
  if (b >= 0) {
    sum = sum + b;
  } else {
    return "b is negative number";
  }

  if (c >= 0) {
    sum = sum + c;
  } else {
    return "b is negative number";
  }
  return sum;
}

//5

function findMax(a, b, c) {
  if ((!a && a != 0) || (!b && b != 0) || (!c && c != 0)) {
    return "type an argument";
  }

  if (typeof a !== "number" && typeof b !== "number" && typeof c !== "number") {
    return "Please type a number";
  }

  let result = 0;
  let multiple = a * b * c;
  let total = a + b + c;

  if (multiple > total) {
    result = multiple;
  } else {
    result = total;
  }
  return result + 3;
}

module.exports = {
  findMax,
  scoreRaiting,
  getSumIsEvenNum,
  cordinateQuarterFinder,
};
