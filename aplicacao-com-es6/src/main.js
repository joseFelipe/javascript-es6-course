import api from "./api";

class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById("repo-form");
    this.inputEl = document.querySelector("input[name=repository]");
    this.listEl = document.getElementById("repo-list");

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;

    if (repoInput.length === 0) return;

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      this.inputEl.value = "";

      this.render();
    } catch (err) {
      alert("Repositório não encontrado.");
    }

    this.setLoading(false);
  }

  setLoading(loading = true) {
    if (loading) {
      let loadingEl = document.createElement("span");
      loadingEl.setAttribute("id", "loading");
      loadingEl.appendChild(document.createTextNode("Carregando..."));

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById("loading").remove();
    }
  }

  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach(repo => {
      let img = document.createElement("img");
      img.setAttribute("src", repo.avatar_url);

      let title = document.createElement("strong");
      title.appendChild(document.createTextNode(repo.name));

      let description = document.createElement("p");
      description.appendChild(document.createTextNode(repo.description));

      let link = document.createElement("a");
      link.setAttribute("target", "blank");
      link.setAttribute("href", repo.html_url);
      link.appendChild(document.createTextNode("Acessar"));

      let list = document.createElement("li");

      list.appendChild(img);
      list.appendChild(title);
      list.appendChild(description);
      list.appendChild(link);

      this.listEl.appendChild(list);
    });
  }
}

new App();
