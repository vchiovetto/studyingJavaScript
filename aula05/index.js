const ireland = ["Dublin", "Galway", "Cork"];

// the map function returns a new array
const visit = ireland.map(function (name) {
  return `I will visit ${name}!`;
});

const visitArrow = ireland.map((name) => {
  return `I will visit ${name}!`;
});

const visitArrowOneLine = ireland.map((name) => `I will visit ${name}!`);

console.log(visit);
console.log(visitArrow);
console.log(visitArrowOneLine);

const loveCity = ireland
  //.filter((name) => name === "Dublin")
  .filter((name) => name !== "Dublin")
  .map((caixinha) => `I love ${caixinha}!`);

console.log(loveCity);
