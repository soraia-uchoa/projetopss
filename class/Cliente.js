const Usuario = require('./Usuario');

class Cliente extends Usuario {
    constructor(nome, cpf){
        super(nome, cpf);
        this.produto = []
    }

    acessoPedido(){
        return "roupas disponiveis."
    }

    adicionarProduto(produto){
        this.carrinho.push(produto);
    }

    finalizarCompra(nomeProduto){
        this.carrinho = this.carrinho.filter(p=> p.nome !== nomeProduto);
    }

}

module.exports = Cliente;