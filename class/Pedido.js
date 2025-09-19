class Pedido {
    constructor(usuario){
        this.usuario = usuario
        this.produtos = []
    }

    adicionarProduto(produto, quantidade = 1) {
        this.produtos.push({ produto, quantidade })
    }

    calcularTotal(){
        return this.produtos.reduce((total, item) => 
         total + item.produto.preco * item.quantidade
        , 0)
    }




}

module.exports = Pedido;