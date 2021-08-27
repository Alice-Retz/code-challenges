import { sortByChildren, containsW, isNum, containsWorld } from './codeChallenge7.js';

let characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ];


test('It should sort the characters by number of children', () => {
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
});

test('It should return true if the word contains a lower case w', () => {
    const input = 'hello world';
    const output = containsW(input);
    expect(output).toEqual(true);
});



test('It should return true if the input is "world"', () => {
    const input = 'hello world';
    const output = containsWorld(input);
    expect(output).toEqual(true);
});

test('It should return true if the input is capitalized', () => {
    const input = 'We only want to Return the Words that begin With a capital Letter';
    const output = containsWorld(input);
    expect(output).toEqual([ 'We', 'Return', 'Words', 'With', 'Letter' ]);
});