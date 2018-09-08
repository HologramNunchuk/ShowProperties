const luke = {
  name: "Luke Skywalker",
  jedi: true,
  sith: false,
  age: 45,
  saberColor: "Green",
  jediRank: "Master",
  sithRank: null
};
const darthVader = {
  name: "Darth Vader",
  jedi: false,
  sith: true,
  age: 64,
  saberColor: "Red",
  jediRank: null,
  sithRank: "Lord"
};
const yoda = {
  name: "Yoda",
  jedi: true,
  sith: false,
  age: 900,
  saberColor: "green",
  jediRank: "Grand Master",
  sithRank: null
};
showProperties(luke);
function showProperties(object) {
  for (let key in object) {
    if (typeof object[key] !== "undefined") console.log(key, object[key]);
  }
}
