const article = {
  title: "a",
  intro: "b",
  body: "c",
  tags: ["a1", "b1", "c1"],
  author: "Vanessa",
  age: "26",
};

function renderAuthor(name, age) {
  return name && age ? `${name} ${age}` : "unknow";
}

const markup = `
<article>
  <header>
    <h1> ${article.title}</h1>
  </header>
  <section>
    <p>${article.intro}</p>
  </section>
  <footer>
    <ul>
      ${article.tags.map((tag) => `<li>${tag}</li>`).join("")}
    </ul>
    author: ${renderAuthor(article.author, article.age)}
  </footer>
</article>
`;

document.body.innerHTML = markup;
