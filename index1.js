//1. Дан массив const arr = [54, 63, 76, 34, 21, 57, 25, 301, 94]; 
//вывести в консоль наибольшее число из этого массива


const arr = [54, 63, 76, 34, 21, 57, 25, 301, 94];
let maxNumber = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNumber) {
    maxNumber = arr[i];
  }
}

console.log(maxNumber);


//2.С помощью цикла создать пустой массив, наполнить массив двузначными 
//числами которые делятся на 3 (с нулевым остатком)

const newArray = [];

for (let i = 10; i <= 99; i++) {
  if (i % 3 === 0) {
    newArray.push(i);
  }
}

console.log(newArray);