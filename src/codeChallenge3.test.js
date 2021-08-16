import { capitalizeObjectKeys, sortedKeys, getFilteredKey, getArrayOfKeysAndValues, sortedArraysByValuesLength } from './codeChallenge3.js';

test('it capitalizes the keys', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = capitalizeObjectKeys(dataObject); //act
  expect(output).toEqual(['NAME', 'AGE']); //assert
});


test('it sorts the keys', () => {
  const dataObject = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] }; //arrange
  const output = sortedKeys(dataObject); //act
  expect(output).toEqual(['age', 'name', 'isDog', 'friends']); //assert
});


test('it filters the keys', () => {
  const dataObject = { name: 'Angelina Jolie', isSpot: false, age: 80, }; //arrange
  const output = getFilteredKey(dataObject); //act
  expect(output).toEqual(['age']); //assert
});

test('it filters the keys array', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = getArrayOfKeysAndValues(dataObject); //act
  expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]); //assert
});

test('it sorts by value length', () => {
  const dataObject = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' }; //arrange
  const output = sortedArraysByValuesLength(dataObject); //act
  expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]); //assert
});