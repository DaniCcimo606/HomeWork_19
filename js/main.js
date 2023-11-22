
// 1

// for (let i = 10; i <= 20; i++) {
//     document.write(i);
//     if (i < 20) {
//         document.write(', ');
//     }
// }

// 2

// for (let i = 10; i <= 20; i++) {
//     document.write(i**2);
//     if (i < 20) {
//         document.write(', ');
//     }
// }

// 3

// for (let i = 1; i <= 10; i++) {
//     document.write(i*7);
//     if (i < 10) {
//         document.write(', ');
//     }
// }

// 4

// let value = 0;

// for (let i = 1; i <= 15; i++) {
//     value += i;
// }

// document.write(`Сумма всех целых чисел от 1 до 15<b>: ${value}</b>`);

// 5

// let value = 1;

// for (let i = 15; i <= 35; i++) {
//     value *= i;
// }

// document.write(`Произведение всех целых чисел от 15 до 35<b>: ${value}</b>`);

// 6

// let value = 0;
// let sum = 0;
// let result = 0;

// for (let i = 1; i <= 500; i++) {
//     sum += i;
//     value = i;
// }

// result = sum / value;

// document.write(`Cреднее арифметическое всех целых чисел от 1 до 500<b>: ${result}</b>`);

// 7

// let value = 0;

// for (let i = 30; i <= 80; i++) {
//     if (i % 2 == 0) {
//         value += i;
//     }
// }

// document.write(`Сумма только четных чисел в диапазоне от 30 до 80<b>: ${value}</b>`);

// 8

// for (let i = 100; i <= 200; i++) {
//     if (i % 3 == 0) {
//         document.write(i);
//         if (i < 200) {
//             document.write(', ');
//         }
//     }
// }

// 9

// let value = +prompt('Введите число:');

// for (let i = 1; i <= value; i++) {
//     if (value % i == 0) {
//         document.write(i);
//         if (i < value) {
//             document.write(', ');
//         }
//     }
// }

// 10

// let value = +prompt('Введите число:');

// for (let i = 1; i <= value; i++) {
//     if (value % i == 0) {
//         if (i % 2 == 0) {
//             document.write(i);
//             if (i < value) {
//                 document.write(', ');
//             }
//         }
//     }
// }

// 11

// let value = +prompt('Введите число:');
// let sum = 0;

// for (let i = 1; i <= value; i++) {
//     if (value % i == 0) {
//         if (i % 2 == 0) {
//             sum += i
//             console.log(i);
//         }
//     }
// }

// document.write(`Сумма только четных делителей<b>: ${sum}</b>`);

// 12

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         document.write(i * j);
//         if (j < 10) {
//             document.write(', ');
//         }
//     }
//     document.write('<br>')
// }

// 13

// for (let i = 20; i <= 30; i+=0.5) {
//     document.write(i);
//     if (i < 30) {
//         document.write(', ');
//     }
// }

// 14

// let dollar = 27;

// for (let i = 1; i <= 100; i++) {
//     if (i % 10 == 0) {
//         document.write(i * dollar);
//         if (i < 100) {
//             document.write(', ');
//         }
//     }
// }

// 15

// let value = +prompt('Введите число');

// if (!isNaN(value)) {
//     for (let i = 1; i <= 100; i++) {
//         if (i**2 <= value) {
//             document.write(i);
//             if (i < value) {
//                 document.write(' ');
//             }
//         }
//     }
// } else {
//     alert('Введите число!!!');
// }

// 16 (несколько решений)

// let value = +prompt('Введите число');
// let i;
// let myArr = [];
// let arrDiv = [];

// if (!isNaN(value)) {
//     for (i = 1; i <= value; i++) {
//         myArr.push(i);
//     }
//     myArr.forEach(el => {
//         if (value % el == 0) {
//             arrDiv.push(el);
//         }
//     });
//     if (arrDiv.length == 2) {
//         alert('Число является простым');
//     } else {
//         alert('Число не является простым');
//     }
// } else {
//     alert('Введите число!!!');
// }

// let value = +prompt('Введите число');
// let check = false;

// if (!isNaN(value)) {
//     for (let i = 2; i < 9; i++) {
//         if (value % i == 0 && value != i) {
//             check = true;
//             alert('Число не является простым');
//             break;
//         }
//     }
//     if (check !== true) {
//         alert('Число является простым');
//     }
// } else {
//     alert('Введите число!!!');
// }

// 17

// let value = +prompt('Введите число')
// let check = false;

// if (!isNaN(value)) {
//     for (let i = 0; i < value; i++) {
//         if (3 ** i == value) {
//             check = true;
//             alert('Можно получить');
//             break;
//         }
//     }
//     if (check === false) {
//         alert('Не можно получить');
//     }
// } else {
//     alert('Введите число!!!');
// }