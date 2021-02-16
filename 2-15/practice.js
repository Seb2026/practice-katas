// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }

// my solution:

function countDevelopers(list) {
    // your awesome code here :)
    
    const newList = [];
    list.forEach(dev => {
      if(dev.continent === `Europe` && dev.language === `JavaScript`){
        newList.push(dev);
      }
    });
    return newList.length
  }

//   Suggested approach:
  function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
  }



//------------------------------------------ 

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:

var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];


// my solution:

function greetDevelopers(list) {
    // thank you for checking out my kata :)
    
    list.forEach(eachDev => {
      eachDev.greeting = `Hi ${eachDev.firstName}, what do you like the most about ${eachDev.language}?`;
    });
    return list
  }

// __________________________________________________

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

var list1 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];


// my solution:
function isRubyComing(list) {
    // thank you for checking out my kata :)
    let rubyCount = 0;
    list.forEach(eachDev => {
      if(eachDev.language === `Ruby`){
        rubyCount += 1;
    }
      
    });
    if(rubyCount > 0){
      return true;
    }else{
      return false;
    }
  }

// suggested approach:
function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby');
  }



// ____________________________

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.
// For example, given the following input array:
var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];


  function getFirstPython(list) {
    let messages = [];
    list.forEach((eachDev) => {
      if(eachDev.language === `Python`){
          messages.push(`${eachDev.firstName}, ${eachDev.country}`);
      }
    });
    if (messages.length > 0) {
        return messages[0];
    }else{
        return `There will be no Python developers`;
    }
}