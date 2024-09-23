class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    apresentar(){
        console.log("O funcionário " + this.nome + " tem " + this.idade + ".")
    }
    trabalhar(){
       console.log("O funcionário " + this.nome + " tem o cargo de " + this.cargo + ".");
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }
    gerenciar(){
        console.log("O funcionário " + this.nome + " tem " + this.idade + " tem o cargo de " + this.cargo + " e é responsável pelo departamento " + this.departamento + ".")
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo)
        this.linguagem = linguagem;
    }
    programar(){
        console.log("O funcionário " + this.nome + " tem " + this.idade + " tem o cargo de " + this.cargo + " e é perito na linguagem de programação " + this.linguagem + ".")
    }
}

var f1 = new Funcionario("João", "23 anos", "engenheiro de software");
console.log(f1);
f1.apresentar();
f1.trabalhar();

var f2 = new Gerente("Romário", "30 anos", "gerente", "Expriência do cliente");
console.log(f2);
f2.gerenciar();

var f2 = new Desenvolvedor("Kieran", "18 anos", "Desenvolvedor Web", "JavaScript")
console.log(f2);
f2.programar();
