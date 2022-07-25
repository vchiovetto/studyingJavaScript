function hello(name = "Joao", surname = "Vitor") {
  //template literals, tem q usar os traços de lado
  console.log(`Hello ${name} ${surname}! How are you?`);
}

hello();
hello("Joao", "Victorino");

const variavelString = "eu sou uma string"; //STRING
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

const variavelArray = [1, 2, 3]; // ARRAY
