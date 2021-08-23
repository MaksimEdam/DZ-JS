function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  //return(fruits.includes(fruit)) ; 
console.log(fruits.includes(fruit));
}
checkFruit("apple"); //-true

function getCommonElements(array1, array2) {
    let element = [];
    for (let i of array1) {
        if (array2.includes(i)) {
            element.push(i);
        }
    }
   // return element;
   console.log(element); 
}
getCommonElements([1, 2, 3], [2, 4]);

/* function calculateTotalPrice(order) {
  let total = 0;
    for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
    //return total;
    console.log(total);
}
calculateTotalPrice([12, 85, 37, 4]); */

function calculateTotalPrice(order) {
  let total = 0; //-обязательно нуно
  for (let number of order) {
    total += number;
  }
    //return total;
    console.log(total);
}
calculateTotalPrice([12, 85, 37, 4]);

/* function filterArray(numbers, value) {
    const filteredNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  //return filteredNumbers;
    console.log(filteredNumbers);
}
filterArray([1, 2, 3, 4, 5], 3); */


function filterArray(numbers, value) {
    const filteredNumbers = [];
    for (let number of numbers) {
         if (number > value) {
      filteredNumbers.push(number);
    }
  }
  //return filteredNumbers;
    console.log(filteredNumbers);
}
filterArray([1, 2, 3, 4, 5], 3);

function findNumber(start, end, divisor) {
    for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      divisor = i;
          }
  }
  //return divisor;
    console.log(divisor);
}
findNumber(2, 6, 5);
findNumber(8, 17, 3);

function includes(array, value) {
for(let number of array) {
  if (number === value) {
    return true;
  } 
}
    return false;
}
includes([1, 2, 3, 4, 5], 3); //-true.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  //const keys = Object.keys(salaries)
  const values = Object.values(salaries);
  for (const value of values) {
    totalSalary += value;
   }


    // Change code above this line
    //return totalSalary;
    console.log(totalSalary);
}




countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
//==========================================
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(yesterday);
console.log(today);
console.log(tomorrow);
//===============================================
/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday, today, tomorrow} = highTemperatures;  
// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3; */
//==================================================
const forecast = {
  today: {low: 28,high: 32, icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',},
  tomorrow: {low: 27, high: 31,},
};
// Change code below this line
const {today: highToday} = forecast;

/* const highTomorrow = forecast.tomorrow.high;
const lowTomorrow = forecast.tomorrow.low;
const tomorrowIcon = forecast.tomorrow.icon; */

/* console.log(highToday);
console.log(lowToday);
console.log(todayIcon);

console.log(highTomorrow);
console.log(lowTomorrow);
console.log(tomorrowIcon); */


function findMatches(number, ...args) {
  const matches = []; // Don't change this line
for (const arg of args){
  if (number.includes(arg)){
    matches.push(arg)}}
  // Change code above this line
  //return matches;
  console.log(matches)
}
findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)

/* const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (oldName === potion.  )
    }
  },
}; */

/* const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  let total = 0;
    for (let i = 0; i < orders; i += 1) {
      total += orders[i];
      console.log(orders)
  }
}
composeMessage(5)
/* return (`Готовим &{this.dish} для &{this.email}. Ваш заказ &{position + 1}-й в очереди.`);
const messages = []; */

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  console.log(`Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
  )
}
const messages = [];
for (let i = 0; i < orders.length; i += 1){
  messages.push(composeMessage.call(orders[i], i + 1))
}

const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};
//=======================================
function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
//================================================

const fnA = function (message, callback) {
  console.log(message);
  console.log(callback);
  callback(100);
};
const fnB = function (number) {
  console.log("Это лог при вызове fnB", number);
};

fnA("help", fnB);

//=============================================

const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}
const add = function (x, y) {
  return x + y;
}
const sub = function (x, y) {
  return x - y;
 }
doMath(2, 8, add);
doMath(5, 3, sub);

//===============================================
function ggetCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки
  firstArray.forEach(function (firstArray) {
    if (secondArray.includes(firstArray)) {
      commonElements.push(firstArray);
    }
  })
    
  console.log(commonElements)
  return commonElements;
  // Пиши код выше этой строки
}
ggetCommonElements([1, 2, 3], [2, 1, 17, 19]);
  
//=========================================================

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => (planet.length));

console.log(planetsLengths)
//=============================================================

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((item, index) => allGenres.indexOf(item) === index);
console.log(allGenres)
  console.log(uniqueGenres)