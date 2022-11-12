
let arr = [1, 2, true, false, 'str'];
// for (const arrElement of arr) {
//     if (typeof arrElement === 'boolean') {
//
//
//         console.log(arrElement);
//     }
// }

// let i = 2;
// while (i < arr.length - 1) {
//     console.log(arr[i]);
//     i++;
// }



// зворотній цикл Ritar

// let newArr = [];
//
//
//
// for (let i = arr.length -1, j = 0; i >=0; i--, j++) {
//     newArr[j] = arr[i]
//
// }
// console.log(newArr);



let i = arr.length - 1;
while ( i >=0) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);


    }
    i--;
}
console.log(arr);