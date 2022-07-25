// declare uma string;
const string = "String";

// declare um number;
const number = 2;

// declare uma boolean;
const boolean = false;

// declare uma funcao qualquer;
const func = () => {};

// crie uma funcao de soma que soma 2 valores e chame ela.
const soma = (a, b) => {
  return a + b;
};

soma(1, 2);

// crie uma funcao de subtracao que subtrai 2 valores e chame ela.
const subtracao = (a, b) => {
  return b - a;
};

subtracao(10, 5);

// crie uma funcao que multiplica 2 valores e chame ela.
const multi = (a, b) => {
  return a * b;
};

multi(2, 2);

// crie uma funcao que divide 2 valores e chame ela.
const dividir = (a, b) => {
  return a / b;
};

dividir(50, 5);

// crie uma funcao que junta 2 textos e chame ela.
const textojunto = (a, b) => {
  return `${a} ${b}`;
};

textojunto("oi", "valeu");

// crie um objeto com um booleano, uma string, um numero, uma funcao e outro objeto como atributos e imprima ele no console.
const objeto = {
  name: "Flavia",
  isLegal: false,
  age: 10,
  dizOi: () => {
    console.log("oi");
  },
  endereco: {
    cidade: "Sao Paulo",
    numero: 10,
    pais: "Brasil",
  },
};

objeto.dizOi();

// dado o array [1,2,3,4,5,6,7,8,9] print no console apenas os items maiores que 4.
const todos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const maiorQ4 = todos.filter((nomeqeuquiser) => nomeqeuquiser > 4);
console.log(maiorQ4);

// dado o array [1,2,3,4,5,6,7,8,9] print no console apenas os items maiores ou iguais que 4.

const maiorouigualQ4 = todos.filter((nomeqeuquiser) => nomeqeuquiser >= 4);
console.log(maiorouigualQ4);

// dado o array [1,2,3,4,5,6,7,8,9] print no console apenas os items menores que 4.
const menorQ4 = todos.filter((nomeqeuquiser) => nomeqeuquiser < 4);
console.log(menorQ4);

// dado o array [1,2,3,4,5,6,7,8,9] crie um array com todos os numeros duplicados. eg [2, 4, 6, 8 ..., 18].
const Multiplicado = todos.map((multip) => multip * 2);
console.log(Multiplicado);

const Multiplicado2 = todos.map((multip) => multi(multip, 2));
console.log(Multiplicado2);

// dado o array [2, -4, 4] filtre apenas valores menores que 3.
const menorQ3 = [2, -4, 4];
const menorQ3s = menorQ3.filter((nomeqeuquiser) => nomeqeuquiser < 3);
console.log(menorQ3s);

// dado o array [{age: 30}, {age: 27}, {age: 22}], ache o primeiro objeto que tiver age maior que 25.
const ages = [{ age: 30 }, { age: 27 }, { age: 22 }];

const maiorQ25 = ages.find((nomequalquer) => nomequalquer.age > 25);

console.log(maiorQ25);

// dado o array [2,3,4] some todos os elementos.
const Somar = [2, 3, 4];

const reducer = (accumulator, curr) => accumulator + curr;
console.log(Somar.reduce(reducer));

console.log(Somar.reduce((acc, cur) => acc + cur, 0));
