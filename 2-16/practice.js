// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ];


// my solution:
function isSameLanguage(list) {
    //   thank you for checking out the Coding Meetup kata :)
      let firstValue = list[0].language;
      return list.every(value => value.language === firstValue);
      
      
    }

// recommended solution:

function isSameLanguage(list) {
    return list.every(e => e.language === list[0].language);
  }



// ____________________________________________

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
  ];


// my solution:

function findAdmin(list, lang) {
    // thank you for checking out the Coding Meetup kata :)
    
    let newList = list.filter(eachDev => eachDev.language === lang)
                  .filter(eachDev => eachDev.githubAdmin === `yes`);
    
    
    return newList;
    
  
  }



// _____________________________

// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.



// my solution:

function search(budget, prices) {

    // return array of prices that are within budget
      const priceList = prices.filter(price => price <= budget)
                        .sort((a,b) => a - b);
      
      return priceList.toString();
    
    }

// other solution: 

let search = (budget, prices) => prices
    .filter(p => p <= budget)
    .sort((a, b) => a - b)
    .join(',')