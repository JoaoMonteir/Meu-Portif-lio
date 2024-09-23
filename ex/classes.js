class pessoa{

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log("Olá " + this.nome);
    }
}

p1 = new pessoa("Fabio", "Silva");
p1.falar();

// essa foi a criação de classe

