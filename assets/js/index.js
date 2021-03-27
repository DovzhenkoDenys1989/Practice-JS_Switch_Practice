//1. В переменной day лежит какое-то число из интервала от 1 до 31
//Определите в какую декаду месяца попадает это число
//(в первую, вторую или третью).

const day = +prompt("Выберите число месяца: ");

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10: {
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
  case 20: {
    console.log(day + " день -" + " 2-ая декада месяца");
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
  case 31: {
    console.log(day + " день -" + " 3-я декада месяца");
    break;
  }
  default:
    console.log("Такого числа в месяце нет");
}

//2. Напишите калькулятор. 2 Числа и операцию спрашивать у пользователя.

const userInput = prompt(
  "Выберите действие калькулятора:\n + (плюс)\n - (минус)\n * (умножение)\n / (деление)\n ** (возведение в степень)\n **/ (извлечь корень)\n % (процент) "
);
const number1 = +prompt("Введите первое число: ");
const number2 = +prompt("Введите второе число/степень/процент: ");

const calculationResult = calculate(number1, number2, userInput);
console.log(calculationResult);

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function power(a, b) {
  return a ** b;
}

function root(a, b) {
  return a ** (1 / b);
}

function percent(a, b) {
  return a * (b / 100);
}

function calculate(number1, number2, userInput) {
  const highOrderFunc = function (number1, number2, operationFunc) {
    const result = operationFunc(number1, number2);
    console.log(operationFunc);
    return "Ответ:" + result;
  };

  let res = null;

  switch (userInput) {
    case "+": {
      res = highOrderFunc(number1, number2, sum);
      break;
    }
    case "-": {
      res = highOrderFunc(number1, number2, sub);
      break;
    }
    case "*": {
      res = highOrderFunc(number1, number2, mul);
      break;
    }
    case "/": {
      res = highOrderFunc(number1, number2, div);
      break;
    }
    case "**": {
      res = highOrderFunc(number1, number2, power);
      break;
    }
    case "**/": {
      res = highOrderFunc(number1, number2, root);
      break;
    }
    case "%": {
      res = highOrderFunc(number1, number2, percent);
      break;
    }
    default: {
      console.log("ERROR: Калькулятор такое действие не поддерживает");
      break;
    }
  }
  return res;
}
