const evolutionOf = (pokeArray, name) => {
  const arr = [];
  pokeArray.forEach(item => {
    if (item.name === name){
      arr.push({ num: item.num, name: item.name })
      
    }
    if (item.hasOwnProperty('prev_evolution')){
      item.prev_evolution.forEach(item2 => {
        if( item2.name === name){
          arr.push({ num: item.num, name: item.name })
        }
      })
    }
    if (item.hasOwnProperty('next_evolution')) {
      item.next_evolution.forEach(item3 => {
        if (item3.name === name) {
          arr.push({ num: item.num, name: item.name })
        }
      })
    }

  })
  if (arr.length === 0) {
    return null;
  }
  // console.log(arr);
  return arr;
  
};


module.exports = evolutionOf;


/*
  return an array with all evolutions of a pokemon, including itself:

    [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]

  if a pokemon does not exist in the pokeArray, return null

    null

  read the ./spec.js file & study the data samples for a better understanding
*/
