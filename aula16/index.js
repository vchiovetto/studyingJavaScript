const data = {
  name: "Willian",
  surname: "Justen",
  age: 25,
  blog: "blog.com",
  social: {
    twitter: "@twitter",
    facebook: "/facebook",
  },
};

const { name, surname } = data;
console.log(name);
console.log(surname);

const { facebook, twitter } = data.social;

console.log(facebook);
console.log(twitter);
