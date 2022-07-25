const data = [
  {
    name: "Willian",
    age: 26,
    city: "Dublin",
  },
];

const will = data.find((person) => person.name === "Willian");
const willIndex = data.findIndex((person) => person.name === "Willian");
console.log(willIndex);

const aArray = [4, -5, 0, -1];
const underZero = aArray.find((x) => x < 0);
const underZeroIndex = aArray.findIndex((x) => x < 0);
console.log(underZero);
console.log(underZeroIndex);
