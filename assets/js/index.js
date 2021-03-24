//1. В переменной day лежит какое-то число из интервала от 1 до 31
//Определите в какую декаду месяца попадает это число
//(в первую, вторую или третью).


const day = +prompt ("Выберите число месяца: ");

switch(day){
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:{
    console.log(day + " день -" + " 1-ая декада месяца");
    break;
  }
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:{
    console.log(day +" день -" + " 2-ая декада месяца");
    break;
  }
  case 21:
  case 22:
  case 23:
  case 24:
  case 25:
  case 26:
  case 27:
  case 28:
  case 29:
  case 30:
  case 31:{
    console.log(day + " день -" + " 3-я декада месяца");
    break;
  }
  default:
    console.log("Такого числа в месяце нет");
    }

 

//2. Напишите калькулятор. 2 Числа и операцию спрашивать у пользователя.


const userInput = prompt("Выберите действие калькулятора:\n + (плюс)\n - (минус)\n * (умножение)\n / (деление)\n ** (возведение в степень)\n **/ (извлечь корень)\n % (процент) ");
const number1 = +prompt("Введите первое число: ");
const number2 = +prompt("Введите второе число/степень/процент: ");


switch(userInput){
  case "+":{
    const resultPlus = number1 + number2;
    console.log("Ответ: ", resultPlus);
    break;
  }
  case "-":{
    const resultMinus = number1 - number2;
    console.log("Ответ: ", resultMinus);
    break;
  }
  case "*":{
    const resultMultiplication = number1 * number2;
    console.log("Ответ: ", resultMultiplication);
    break;
  }
  case "/":{
    const resultDivision = number1 / number2;
    console.log("Ответ: ", resultDivision);
    break;
  }
  case "**":{
    const resultPower = number1 ** number2;
    console.log("Ответ: ", resultPower);
    break;
  }
  case "**/":{
    const resultRoot = number1 ** (1 / number2);
    console.log("Ответ: ", resultRoot);
    break;
  }
  case "%":{
    const resultPercent = number1 * (number2 / 100);
    console.log("Ответ: ", resultPercent);
    break;
  }
  default:
    console.log("ERROR: Калькулятор такое действие не поддерживает");
}