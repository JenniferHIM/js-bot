// Task 1
// Запиши условие в инструкции if так, чтобы функция работала правильно.

function checkAge(age) {
    if (age >= 18) { // Дополни эту строку
      return 'Вы совершеннолетний человек';
    }
  
    return 'Вы не совершеннолетний человек';
  }


// Task 2
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора 
// в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:
// удали переменную message;
// удали else;
// код должен работать так же, как и до оптимизации.

function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    // Пиши код ниже этой строки
  
    if (password === ADMIN_PASSWORD) {
      return 'Добро пожаловать!';
    } 
      return 'Доступ запрещен, неверный пароль!';
    
    // Пиши код выше этой строки
  }


// Task 3
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. 
// Она принимает два параметра, значения которых будут задаваться во время её вызова.
// available - доступное количество товаров на складе;
// ordered - количество единиц товара в заказе.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

function checkStorage(available, ordered) {
    // Пиши код ниже этой строки
    
    if (ordered === 0) {
      return 'В заказе еще нет товаров';
    } 
    if (ordered > available) {
      return 'Слишком большой заказ, на складе недостаточно товаров!';
    } 
      return 'Заказ оформлен, с вами свяжется менеджер';
    
    // Пиши код выше этой строки
  }


//   Task 4
//   Объяви переменную fruits и присвой ей массив фруктов - строк 'яблоко', 'слива', 'груша' и 'апельсин'.

// Пиши код ниже этой строки
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];


// Task 5
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива

// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];


// Task 6
// Переопредели значения элементов с индексами 1 и 3. Замени 'слива' на 'персик', а 'апельсин' на 'банан'.

// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
fruits[1] = 'персик';
fruits[3] = 'банан';


// Task 7
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const fruitsArrayLength = fruits.length;


// Task 8
// Объяви две переменные:
// Имя переменной	Ожидаемое значение
// lastElementIndex	индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	значение последнего элемента массива

// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];


// Task 9
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. 
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
    // Пиши код ниже этой строки
    const firstArray = array[0];
  const lastArray = array[array.length - 1];
  
  return [firstArray, lastArray];

    // Пиши код выше этой строки
  }


// Task 10
// Дополни код функции splitMessage(message, delimeter) так, 
// чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

function splitMessage(message, delimeter) {
    let words;
    // Пиши код ниже этой строки
     words = message.split(delimeter);
    
    
    // Пиши код выше этой строки
    return words;
  }


// Task 11
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, 
// состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке. 

function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
let newArray = message.split(' ');
let total = newArray.length * pricePerWord;  
 return total;
  // Пиши код выше этой строки
}


// Task 12
// Дополни код функции makeStringFromArray(array, delimeter) так, 
// чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки
 
 string = array.join(delimeter);
 
  // Пиши код выше этой строки
  return string;
}


// Task 13
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.
// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. 
// В результате адрес получится более приятным для восприятия: mysite.com/posts/массивы-для-новичков.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.

function slugify(title) {
  // Пиши код ниже этой строки
 
  let array = title.split(' ');
  let string = array.join('-');
  let lowerString = string.toLowerCase();
  
  return lowerString;
  
  // Пиши код выше этой строки
}


// Task 14
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);


// Task 15
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients = oldClients.concat(newClients); // Дополни эту строку


// Task 16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. 
// Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
  // Пиши код ниже этой строки
let newArray = firstArray.concat(secondArray);
if (newArray.length > maxLength) {
return newArray.slice(0, maxLength);
}
return newArray;
  
  // Пиши код выше этой строки
}


// Task 17
// Функция logNumbersInRange(start, end) логирует все целые числа в диапазоне от start до end включительно. 
// Дополни тело функции так, чтобы она работала правильно.

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Дополни эту строку
  console.log(i);
}


// Task 18
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. 
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

function calculateTotal(number) {
  // Пиши код ниже этой строки
  let sum = 0;
for (let i = 1; i <= number; i += 1) {
  sum += i;
}
return sum;
  // Пиши код выше этой строки
}


// Task 19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
  const fruit = fruits[i]; // Дополни эту строку
  console.log(fruit);
}


// Task 20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. 
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
for (let i = 0; i < order.length; i += 1) {
  total += order[i];
}
  // Пиши код выше этой строки
  return total;
}


// Task 21
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) 
// и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  // Пиши код ниже этой строки
  const array = string.split(' ');
  let biggest = 0;
  let wordLength = 0;
  let longestWord = 0;
  for (let i = 0; i < array.length; i += 1) {
    wordLength = array[i].length;
    if (wordLength > biggest) {
      biggest = wordLength;
      longestWord = array[i];
    }
  }
  return longestWord;
  
  // Пиши код выше этой строки
}


// Task 22
// Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
for (let i = min; i <= max; i += 1) {
  numbers.push(i);
}
  // Пиши код выше этой строки
  return numbers;
}


Task 23