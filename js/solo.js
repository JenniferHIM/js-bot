// function main() {
//     let distance = parseInt (readLine(), 10);
//     // your code is here
//     let miles = 40;
//     let minutes = 60;
//     let time = (distance / miles) * minutes;
//     console.log(time);
// }


// let sum = 0;
// for(i=4; i<8; i +=) {
//     if (i == 6) {
//         continue;
//     }
//     sum += 1;
// }
// console.log(sum); //sum = 16 (4+5+7) т.к. 6 пропустит


// let x = 0;
// while (x < 6) {
//     x ++;
//     }
//     document.write(x); // 6 (0, 1, 2, 3, 4, 5)


// function main() {
//     let depth = parseInt (readLine(), 10);
//     // your code is here
//     let climb = 7;
//     let slip = 2;
//     let day = 0;
//         for(i = 0; i <= depth;) {
//             day += 1;
//             i += climb;
//             if(i >= depth){
//                 break;
//             }
//             i -= slip;
            
//         }
//      console.log(day);
//     }



// function test(number) {
//     while (number < 5) {
//         number +=;
//     }
//     return number;
// }
// alert(test(2)); // вернет 5


function main() {
let amount = parseFloat(readLine(), 10);
let rate = parseFloat(readLine(), 10);

console.log(convert(amount, rate));
}

function convert(a,b) {
    return a * b;
}
console.log(convert(5, 10)); // вернет 50
