import { howMuchPencil, wordsToCharList, listFoods, stepActions, removeLastCharacters } from './codeChallenge5.js';

const gruffaloCrumble = {
    name: 'How to make a Gruffalo Crumble',
    ingredients: [
      '1 medium-sized Gruffalo',
      '8 pounds oats',
      '2 pounds brown sugar',
      '4 pounds flour',
      '2 gallons pure maple syrup',
      '16 cups chopped nuts',
      '1 pound baking soda',
      '1 pound baking powder',
      '1 pound cinnamon',
      '6 gallons melted butter',
      '2 gallons fresh water',
    ],
    steps: [
      'Pre-heat a large oven to 375',
      'De-prickle the gruffalo',
      'Sprinkle with cinnamon, sugar, flour, and nuts',
      'Mix until evenly distributed',
      'Grease a 3-foot x 3-foot casserole dish',
      'Combine gruffalo compote with water to maintain moisture in the oven',
      'Fold together remaining ingredients to make the crisp',
      'Spread the crisp evenly over the gruffalo mixture',
      'Bake for 12-15 hours',
    ]
  }; 
  





 test('It should return a list of shortening words', () => {
    expect(howMuchPencil('Welcome')).toStrictEqual(['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']);
    expect(howMuchPencil('Welcome').length).toStrictEqual(8);
    expect(howMuchPencil('')).toStrictEqual(['']);
    expect(howMuchPencil('abc')).toStrictEqual(['abc', 'bc', 'c', '']);
  });

 test('It should return an array', () => {
    expect(wordsToCharList('Gregor')).toStrictEqual(['G', 'r', 'e', 'g', 'o', 'r']);
    expect(wordsToCharList('Gregor').length).toStrictEqual(6);
    expect(wordsToCharList('')).toStrictEqual([]);
    expect(wordsToCharList('abc')).toStrictEqual(['a','b', 'c']);
  });

  test('it should list food', () => {
    const output = listFoods(gruffaloCrumble); //act
    expect(output).toEqual(['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']); //assert
  });

  test('it should list steps', () => {
    const output = stepActions(gruffaloCrumble); //act
    expect(output).toEqual(['Pre-heat', 'De-prickle', 'Sprinkle', 'Mix', 'Grease', 'Combine', 'Fold', 'Spread', 'Bake']); //assert
  });

  test('it should remove last characters', () => {
    const output = removeLastCharacters('wowow', -700); //act
    expect(output).toEqual('wowow'); //assert
  });

