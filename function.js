//1)
function dayOfWeek(dayIndex) {

  let weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    if(dayIndex > 7 || dayIndex < 0){
      return "type right day";
    }
    return weekDays[dayIndex -1];
}
console.log("dayOfWeek", dayOfWeek(5));


//2)unit > 0 && unit < 10
function nameOfNumber(number){
  let unitsInText = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
  let teenDecimalsInText = ['одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
  let decimalsInText =  ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
  let hundredsInText = ["сто", "двести","триста","четиресто","пятъцот","шестьсот","семъсот","восемьсот","девятьсот"];
  let unit = number % 10;
  let decimal = (number - unit) / 10;
  let hundred = (number / 100) / 1 >> 0;
  if(number > 10 && number < 20){
    return teenDecimalsInText[number - 11];
  }
  if(unit == 0){
    return teenDecimalsInText[decimal - 1];
  }else{
    return decimalsInText[decimal - 1] + " " + unitsInText[unit - 1];
  }
  // if(unit == 0 && decimal == 0){
  //   return decimalsInText[decimal-1];
  // }
}
console.log("nameOfNumber(25)", nameOfNumber(25));


//2
function getDistance(xA, yA, xB, yB) {
	var xDiff = xA - xB;
	var yDiff = yA - yB;

	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
console.log("getDistance()", getDistance(4,3,2,6));
