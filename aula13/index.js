const text = "Joao";

console.log(Array.from(text));

const list = document.querySelectorAll("#list li");
const listArray = Array.from(list);
console.log(listArray);
console.log(list);

const names = listArray.map((item) => item.innerHTML);
console.log(names);

/*const variavelString = "eu sou uma string"; //STRING
const variavelNumber = 10; // NUMBER q
const variavelBoolean = false; //BOOLEAN
const varaivelObjeto = {
  // OBJETO
  nome: "Vanessa",
};
const variavelFuncao = () => {
  // FUNCAO
  console.log("Vanessa funcao");
};

function variavelFuncao2() {
  // FUNCAO
  console.log("Vanessa funcao");
}

const variavelArray = [1, 2, 3]; // ARRAY*/
