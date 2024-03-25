// Завершите функцию, используя приведенные ниже правила, чтобы изменить объект, переданный в функцию. Ваша функция всегда должна возвращать весь объект записей. Если значение представляет собой пустую строку, удалите данное свойство свойства из альбома. Если свойство не является треком и значение не является пустой строкой, присвойте значение свойству этого альбома. Если свойство — это треки, а значение — не пустая строка, но у альбома нет свойства треков, создайте пустой массив и добавьте к нему значение. Если свойство — это треки, а значение — не пустая строка, добавьте значение в конец существующего массива треков альбома. Примечание. Для тестов используется копия объекта RecordCollection. Не следует напрямую изменять объект RecordCollection.

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  if (value === "") {
    delete records[id][prop];
  }
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (
    prop === "tracks" && value !== "" &&
    !records[id].hasOwnProperty("tracks")
  ) {
    records[id][prop] = [];
    records[id][prop].push(value);
  };
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
