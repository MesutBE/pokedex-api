const assert = require('assert');

const findById = require('./index.js');

const dataSample1 = require('../../../data/samples/1.json');
const dataSample2 = require('../../../data/samples/2.json');
const dataSample3 = require('../../../data/samples/3.json');

describe("findById(pokeData, id) : returns the pokemon object with the given id", () => {

  it(`data sample 1, 13`, () => {
    const actual = findById(dataSample1, 13);
    const expected = {
      "id": 13,
      "num": "013",
      "name": "Weedle",
      "img": "http://www.serebii.net/pokemongo/pokemon/013.png",
      "type": [
        "Bug",
        "Poison"
      ],
      "height": "0.30 m",
      "weight": "3.2 kg",
      "candy": "Weedle Candy",
      "candy_count": 12,
      "egg": "2 km",
      "spawn_chance": 7.12,
      "avg_spawns": 712,
      "spawn_time": "02:21",
      "multipliers": [
        1.01,
        1.09
      ],
      "weaknesses": [
        "Fire",
        "Flying",
        "Psychic",
        "Rock"
      ],
      "next_evolution": [
        { "num": "014", "name": "Kakuna" },
        { "num": "015", "name": "Beedrill" }
      ]
    };
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 1, 16`, () => {
    const actual = findById(dataSample1, 16);
    const expected = null;
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 2, 46`, () => {
    const actual = findById(dataSample2, 46);
    const expected = {
      "id": 46,
      "num": "046",
      "name": "Paras",
      "img": "http://www.serebii.net/pokemongo/pokemon/046.png",
      "type": [
        "Bug",
        "Grass"
      ],
      "height": "0.30 m",
      "weight": "5.4 kg",
      "candy": "Paras Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.36,
      "avg_spawns": 236,
      "spawn_time": "01:42",
      "multipliers": [
        2.02
      ],
      "weaknesses": [
        "Fire",
        "Ice",
        "Poison",
        "Flying",
        "Bug",
        "Rock"
      ],
      "next_evolution": [
        {
          "num": "047",
          "name": "Parasect"
        }
      ]
    };
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 2, 42`, () => {
    const actual = findById(dataSample2, 42);
    const expected = null;
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 3, 84`, () => {
    const actual = findById(dataSample3, 84);
    const expected = {
      "id": 84,
      "num": "084",
      "name": "Doduo",
      "img": "http://www.serebii.net/pokemongo/pokemon/084.png",
      "type": [
        "Normal",
        "Flying"
      ],
      "height": "1.40 m",
      "weight": "39.2 kg",
      "candy": "Doduo Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.52,
      "avg_spawns": 52,
      "spawn_time": "05:10",
      "multipliers": [
        2.19,
        2.24
      ],
      "weaknesses": [
        "Electric",
        "Rock"
      ],
      "next_evolution": [
        {
          "num": "085",
          "name": "Dodrio"
        }
      ]
    };
    assert.deepStrictEqual(actual, expected);
  });

  it(`data sample 3, 85`, () => {
    const actual = findById(dataSample3, 85);
    const expected = {
      "id": 85,
      "num": "085",
      "name": "Dodrio",
      "img": "http://www.serebii.net/pokemongo/pokemon/085.png",
      "type": [
        "Normal",
        "Flying"
      ],
      "height": "1.80 m",
      "weight": "85.2 kg",
      "candy": "Doduo Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.22,
      "avg_spawns": 22,
      "spawn_time": "02:12",
      "multipliers": null,
      "weaknesses": [
        "Electric",
        "Rock"
      ],
      "prev_evolution": [
        {
          "num": "084",
          "name": "Doduo"
        }
      ]
    };
    assert.deepStrictEqual(actual, expected);
  });

});
