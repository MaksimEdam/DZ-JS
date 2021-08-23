const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]
console.log(users);
//==============================================

const getNamesSortedByFriendCount = users.flatMap(user => user.friends).filter((item, index, arr) => arr.indexOf(item) === index).sort((a, b) => a.localeCompare(b));
console.log(getNamesSortedByFriendCount)
const ggg = getNamesSortedByFriendCount.filter((item, index) => getNamesSortedByFriendCount.indexOf(item) === index);
console.log(ggg)

//==================================================
const hhh = users.filter(user => user.isActive);
console.log(hhh);
const fff = users.filter(user => !user.isActive);
console.log(fff);
const getUserWithEmail = (users, email) => {
 return users.find(user => user.email.includes(email))  
};
console.log(users.email);
//===========================================
const calculateTotalBalance = users.reduce((total, user) => {
  return total + user.balance;
}, 0);
console.log(calculateTotalBalance);
/* const calculateTotalBalance = users => {
   return users.reduce((total, user) => { return total + user.balance;
}, 0);
}; */
const getTotalFriendCount = users.reduce((total, user) => {
  return total + user.friends.length;
}, 0);
console.log(getTotalFriendCount);
//==================================================

/* const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((option) => option.title === BOOK_TITLE);
const bookByAuthor = books.find((option) => option.author === AUTHOR);
console.log(bookWithTitle); */
//==============================================================

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((value) => value / 2);
console.log(eachElementInFirstIsEven);
const eachElementInFirstIsOdd = firstArray.every((value) => !value / 2);;
console.log(eachElementInFirstIsOdd);
const eachElementInSecondIsEven = secondArray.every((value) => value / 2);
console.log();
const eachElementInSecondIsOdd = secondArray.every((value) => !value / 2);
console.log();
const eachElementInThirdIsEven = thirdArray;
console.log();
const eachElementInThirdIsOdd = thirdArray;
console.log();
//=====================================================

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return total + player.playtime / player.gamesPlayed;
}, 0);

console.log(totalAveragePlaytimePerGame);
//=============================
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
console.log(ascendingReleaseDates);
console.log(descendingReleaseDates);
//====================================================
const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);
//===============================================



//=====================================================

/* const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const inAscendingScoreOrder = [...books].sort(
  (firstStudent, secondStudent) => firstStudent.rating - secondStudent.rating
);
console.log(inAscendingScoreOrder);
const inDescendingScoreOrder = [...books].sort(
  (firstStudent, secondStudent) => secondStudent.rating - firstStudent.rating
);
console.log(inDescendingScoreOrder);
const inAlphabeticalOrder = [...books].sort((firstStudent, secondStudent) =>
  firstStudent.author.localeCompare(secondStudent.author)
);
console.log(inAlphabeticalOrder); */

//================================================
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = books.filter(book => book.rating > MIN_BOOK_RATING);
console.log(names);