const isEqual = require('lodash').isEqual;

const valuesForKey = (pokeArray, key) => {

  const arr = [];
  pokeArray.forEach(item => {    
    
    if (!isEqual(arr[arr.indexOf(item[key])], item[key])  && item[key] !== undefined){

      arr.push(item[key]);
    }

  });

  return arr;


  
};


module.exports = valuesForKey;

/* https://lodash.com/docs/4.17.15#isEqual

  isEqual is a function to compare objects and arrays.

  it will come in handy on this challenge

*/
