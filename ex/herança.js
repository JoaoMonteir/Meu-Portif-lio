class dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log("Já está ligado");
            return;
        }
        this.ligado = true;
    }
}

class celular extends dispositivo{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new celular("iphone", "branco", "13");
console.log(s1);
s1.ligar();
s1.ligar();


//para o valor se tornar positivo ou falso, chamar duas vezes a função e ele atualiza o status
// exemplo de herança de classes

