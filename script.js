// task 1-------------------
// let arr = [5, 6, 7, 8, 9];
// let sum = 0
// arr.forEach((elem) => sum += elem);

//  task 2-------------------
// let arr = [5, 6, 7, 8, 9];
// let newArr = arr.map((elem) => elem * elem);

// task 3-----------------------
// let arr = [
//     { name: 'Ivan', country: 'Ukraine' },

//     { name: 'Petro', country: 'Ukraine' },

//     { name: 'Miguel', country: 'Cuba' }
// ];
// let result = arr.every((obj) => obj.country.toLowerCase() == 'ukraine');
// console.log(result);

// task 4 ---------------------------------
// let arr = [
//     { name: "Ivan", country: "Ukraine" },

//     { name: "Petro", country: "Ukraine" },

//     { name: "Miguel", country: "Cuba" },
// ];

// let result = arr.some((obj) => obj.country.toLowerCase() == "ukraine");
// console.log(result);

// task 5------------------------------------
// let arr = [1, "string", [3, 4], 5, [6, 7]];
// let result = arr.filter((item) => Array.isArray(item));
// console.log(result);

// task 6-------------------------------------
// let arr = [1, 2, 5, 0, 4, 5, 6];
// let r = 0;
// let newArr = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === 0)
//         break;
//     else if (arr[i] !== 0) {
//         newArr.push(arr[i]);
//     }
// }

// let result = newArr.reduce((a, b) => {
//     return a+b
// });
// console.log(result);

// task 6  (2)-----------
// let count = 1;
// let sum = 0;
// let arr = [1, 2, 5, 0, 4, 5, 6];
// for (let i = 0; i < arr.length; i++){
//     if (sum + arr[i] > 10) {
//         break;
//     }
//     else {
//         sum += arr[i];
//        count++
//     }

// }
// console.log(count);

// task 7-------------------------

// let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// let positive = arr.filter((num) => num > 0);
// console.log(positive);

// let squareRoot = positive.map((num) => Math.sqrt(num));
// console.log(squareRoot);
