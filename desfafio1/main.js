//Exercicio 1

class Usuario {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Usuario {
  constructor(email, password) {
    super(email, password);
    this.admin = true;
  }
}

const user = new Usuario("felipe@alternativeagencia.com.br", "123");
const admin = new Admin("felipeadmin@alternativeagencia.com.br", "321");

console.log(user.isAdmin());
console.log(admin.isAdmin());

/*Exercicio 2
A partir do seguinte vetor e utilizando os métodos de array
(map, reduce, filter e find):*/

const users = [
  { nome: "Felipe", idade: 26, empresa: "Alternative" },
  { nome: "Ricardo", idade: 19, empresa: "Alternative" },
  { nome: "Guilherme", idade: 22, empresa: "Alternative" }
];

const ages = users.map(function(item) {
  return item.idade;
});

console.log(ages);


//2.2 Utilizando o filter

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});
console.log(filter);

const users1 = users.filter(usuario => {
  return usuario.idade >= 20 && usuario.empresa === "Alternative"
    ? usuario
    : false;
});

Arrow function
const usersArrow = users.filter(usuario =>
  usuario.idade >= 20 ? usuario : false
);
console.log(usersArrow);

console.log(users1);

const usersGoogle = users.find(usuario => usuario.empresa == "Google");
console.log(usersGoogle);

//Exercício 2.4
const calculo = users
  .map(user => ({ ...user, idade: user.idade * 2 }))
  .filter(user => user.idade <= 50);

console.log(calculo);

//Exercício 3

Arrow function
arr.map(item => item + 10);
console.log(arr);

const usuario = { nome: "Diego", idade: 23 };

const result = usuario => {
  return usuario.idade;
};
console.log(result(usuario));

// 3.3

const nome = "Felipe Silva";
const idade = 26;

const result = (nome = "Felipe", idade = 18) => ({ nome, idade });

console.log(result());
console.log(result(nome, idade));

const result = () => new Promise((resolve, reject) => resolve());

//Exercício 4
//4.1 Desestruturação simples

const empresa = {
  nome: "Alternative",
  endereco: {
    cidade: "Blumenau",
    estado: "SC"
  }
};

const {
  nome,
  endereco: { cidade, estado }
} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

// 4.2 Desestruturação em parâmetros

const usuario = { nome: "Felipe", idade: 26 };

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo(usuario));

//5.1 Rest

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

const arr = [1, 2, 3, 4, 5, 6];

const result = (...params) => params.reduce((item, next) => item + next);

console.log(result(1, 2, 5));

// 5.2 Spread

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const usuario2 = { ...usuario, nome: "Felipe" };

const usuario3 = { ...usuario, endereco: { cidade: "Blumenau" } };

console.log(usuario2);
console.log(usuario3);

const usuario = "Felipe";
const idade = 26;

console.log(`O usuário ${usuario} possui ${idade} anos`);

// Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
const nome = 'Diego';
const idade = 23;
const usuario = {
 nome: nome,
 idade: idade,
 cidade: 'Rio do Sul',
};

const nome = "Felipe";
const idade = 26;

const usuario = {
  nome: nome,
  idade: idade,
  cidade: "Blumenau"
};

const usuario2 = {
  nome,
  idade,
  cidade: "Blumenau"
};

console.log(usuario);
console.log(usuario2);
