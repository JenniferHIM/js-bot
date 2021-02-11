//Task 1
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, 
// и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
    // Пиши код ниже этой строки
  
    // for (let i = 0; i < orderedItems.length; i += 1) {         <--- сделать рефакторинг этого
    //   totalPrice += orderedItems[i];
    // }

   //OR

   // orderedItems.forEach(item => console.log(totalPrice += item));

    //OR

    // orderedItems.forEach(function(item){
    //     totalPrice += item;
    //   });
     
    // Пиши код выше этой строки
    //return totalPrice;
  //}


//    Task 2
//   Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, 
//   в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
//   Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

//   function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     // for (let i = 0; i < numbers.length; i += 1) {       <--- сделать рефакторинг этого
//     //   if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     //   }
//     // }

//     numbers.forEach(function(number){
//         if (number > value) {
//            return filteredNumbers.push(number);
//         }
//           });
 
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }


// Task 3
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, 
// и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     // for (let i = 0; i < firstArray.length; i += 1) {            <--- сделать рефакторинг этого
//     //   if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //   }
//     // }
  
//     firstArray.forEach(function(array) {
//         if (secondArray.includes(array)) {
//            return commonElements.push(array);
//         }
//     });
//     return commonElements;
//     // Пиши код выше этой строки
//   }


// Task 4
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// Пиши код ниже этой строки
// function calculateTotalPrice(quantity, pricePerItem) {        <-- Исходник
//     // Пиши код выше этой строки
//     return quantity * pricePerItem;
//   }
  
// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => {
//     // Пиши код выше этой строки
//     return quantity * pricePerItem;
//   }
  

//   Task 5
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => {    <---Исходник
//     return quantity * pricePerItem;
//   };
//   // Пиши код выше этой строки

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Пиши код выше этой строки
  

// Task 6
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. 
// Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach((item) => {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }
//   // Пиши код выше этой строки


//  Task 7
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// // Пиши код ниже этой строки
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
  
//     numbers.forEach(function (number) {     <---- Исходник
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }


// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }


// Task 8
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
//   }


// Task 9
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, 
// значение которого это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, 
// а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
  
//   const newArray = [];
//   numbers.forEach(number => {
        
//       if (number % 2 === 0) {
//     number += value;
//       } 
//       newArray.push(number);
//   });
  
//   return newArray; 
// };

    // Пиши код выше этой строки
  
//   for (let i = 0; i < numbers.length; i += 1) {   <--- Исходник
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }

// Task 10
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);
    

// Task 11
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.
    
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
//   const titles = books.map(books => books.title);
//   console.log(titles);

// Task 12
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
   
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика']
//   }
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

// Task 13
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

// const getUserNames = users =>  {
  
// return users.map(user => user.name);

// };

// Task 14
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
// const getUserEmails = users => {
//   return users.map(user => user.email);

// };

// Task 15
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, 
// а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// Task 16
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books,
// а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения']
//   }
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres); // Записываются в строку все жанры
// const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index); // Записываются только уникальные жанры, без повторений

// Task 17
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);


// Task 18
// Дополни функцию getUsersWithEyeColor(users, color) так, 
// чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
 
//  };
//  // Пиши код выше этой строки

// Task 19
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, 
// возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({age}) => age >= minAge && age <= maxAge);
 
//  };
 // Пиши код выше этой строки

//  Task 20
//  Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. 
//  Массив друзей пользователя хранится в свойстве friends.


// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(user => user.friends.includes(friendName));
 
//  };

    //.filter(user => user.friends.some(friend => friend === friendName))
  //   .map(user => user.name);
  
//};

// Task 21
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). 
// У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// Пиши код ниже этой строки
// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends); // Записываются в строку все жанры
// return allFriends.filter((user, index, array) => array.indexOf(user) === index); 
// };
// Пиши код выше этой строки

// Task 22
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive === true);
   
// };
// Пиши код выше этой строки


// Task 23
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

// Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//   return users.filter(user => user.isActive === false);
   
// };
// Пиши код выше этой строки


// Task 24
// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((books) => books.title === BOOK_TITLE );
// const bookByAuthor = books.find((books) => books.author === AUTHOR);


// Task 25
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.
// Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//   return users.find((users) => users.email === email);
// };
// Пиши код выше этой строки


// Task 26
// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);


Task 27

// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
  const isActiveNow = users.every((user) => users.iActive === true); 
  const isNotActiveNow = users.every((user) => users.iActive === false); 
};
// Пиши код выше этой строки