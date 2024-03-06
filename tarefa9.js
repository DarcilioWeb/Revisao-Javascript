class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
        exibirInfo() {
            console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissao: ${this.profissao}`);
        }
    }

const pessoaDarc = new Pessoa("Darcilio", 21, "Hacker");

pessoaDarc.exibirInfo();