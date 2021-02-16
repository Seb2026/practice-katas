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