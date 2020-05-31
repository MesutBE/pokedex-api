
const isEqual = require('lodash').isEqual;

const weakness = (pokeArray, type) => {
    const arr =[];
    pokeArray.forEach(element => {

        for (let item of element['weaknesses']) {
            if (item == type) {
                const newItem = { name: element.name, num: element.num };
                arr.push(newItem);
            }
        }

    });
    // <--------- make unique 
    arr.forEach(item1 => {
        let i = 0;
        arr.forEach(item2 => {
            if (isEqual(item2, item1)) {
                i++;
            }
        })
        if (i > 1) {
            arr.splice(arr.indexOf(item1), 1)
        }
    })
    // make unique -------->

    if (arr.length === 0) {
        return null;
    }

    return arr;
};

module.exports = weakness;
