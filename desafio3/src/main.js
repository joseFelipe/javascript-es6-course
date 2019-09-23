// 1
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// const onePerSecond = async () => {
//   await delay();
//   console.log("1s");
//   await delay();
//   console.log("2s");
//   await delay();
//   console.log("3s");
// };

// onePerSecond();

// 2
//import axios from "axios";

// const getUserFromGithub = async user => {
//   try {
//     const response = await axios.get(`https://api.github.com/users/${user}`);
//     console.log(response.data);
//   } catch (err) {
//     console.warn("Erro ao buscar usuário: " + err);
//   }
// };

// getUserFromGithub("joseFelipe");
// getUserFromGithub("joseFelipe123");

// class Github {
//   static getRepositories(repo) {
//     axios
//       .get(`https://api.github.com/repos/${repo}`)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(err => {
//         console.log("Repositório não existe");
//       });
//   }
// }

//3

import axios from "axios";

class Github {
  static getRepositories = async repo => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch {
      console.log("Repositório não existe");
    }
  };
}

Github.getRepositories("joseFelipe/javascript-es6-course");
Github.getRepositories("joseFelipe/asdfadsfa");

const findUser = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch {
    console.log("Usuário não existe");
  }
};

findUser("joseFelipe");
