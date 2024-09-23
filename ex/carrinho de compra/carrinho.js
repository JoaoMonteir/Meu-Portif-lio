var valorTotal = [0,0];
var valorProduto = [50.00,30.00];
var qtd = [0,0];

function adicionarITem(item){
    var quantidade = document.getElementById('quantidade' + item);
    var total = document.getElementById("total" + item);
    qtd[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].total.Fixed(2);
}