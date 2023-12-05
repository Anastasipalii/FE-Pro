//1. Пользователь вводит год своего рождения, вывести информацию о возрасте пользователя
// в разные года до текущего. Например, вводим «2003». Вывод: «в 2003 было 
//1 год», «в 2004 было 2 год», «в 2005 было 3 год» и т.д.//


let userBirthYear = prompt("Введите год рождения:");
const currentYear = new Date().getFullYear();

while (userBirthYear <= currentYear) {
    let age = currentYear - userBirthYear;
    console.log(`В ${userBirthYear} было ${age} год${getCorrectEnding(age)}`);
    userBirthYear++;
}

function getCorrectEnding(age) {
    const lastDigit = age % 10;
    const secondToLastDigit = Math.floor(age / 10) % 10;

    if (secondToLastDigit === 1) {
        return "ов";
    } else {
        if (lastDigit === 1) {
            return " год";
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return " года";
        } else {
            return " лет";
        }
    }
}


//2. Написать программу, в которой пользователя просят ввести числа 5 раз. 
//Причем каждое последующее число должно быть больше предыдущего, 
//иначе вывести ошибку.

let previousNumber;

for (let i = 1; i <= 5; i++) {
    let currentNumber = prompt(`Введите число #${i}:`);

    if (i > 1 && currentNumber <= previousNumber) {
        console.log("Ошибка: Введенное число должно быть больше предыдущего.");
        break;
    }

    previousNumber = currentNumber;
}

console.log("Программа завершена.");