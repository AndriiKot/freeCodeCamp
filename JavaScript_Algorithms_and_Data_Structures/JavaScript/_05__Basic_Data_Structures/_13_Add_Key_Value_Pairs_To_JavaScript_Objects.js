const foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);

const tekkenCharacter = {
  player: "Hwoarang",
  fightingStyle: "Tae Kwon Doe",
  human: true,
};

tekkenCharacter["hair color"] = "dyed orange"; // если свойство содержит пробелы
// то его можно использовать таким способом

tekkenCharacter.origin = "South Korea";

const eyes = "eye color";
tekkenCharacter[eyes] = "brown";

console.log(tekkenCharacter);

// {
//   player: 'Hwoarang',
//   fightingStyle: 'Tae Kwon Doe',
//   human: true,
//   origin: 'South Korea',
//   'hair color': 'dyed orange',
//   'eye color': 'brown'
// };
