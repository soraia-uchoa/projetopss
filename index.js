const prompt = require('prompt-sync')();
const Produto = require("./class/Produto")
const Usuario = require("./class/Usuario")
const Pedido = require("./class/Pedido")

const produto1 = new Produto("Calçado feminino", 78, 7)
const produto2 = new Produto("Calçado masculino", 70, 8)
const produto3 = new Produto("Calçado infantil", 80, 9)


const nome = prompt("Digite seu nome: ")
const cpf = parseInt(prompt("Digite seu CPF sem pontos e traço: "))


const usuario = new Usuario(nome, cpf)


const pedido = new Pedido(usuario)


console.log(`
Produtos disponíveis:
1 - Calçado feminino
2 - Calçado masculino
3 - Calçado infantil
`)

let option = parseInt(prompt("Selecione um item: "))
let quantidade = parseInt(prompt("Digite a quantidade: "))

switch(option){
    case 1:
        pedido.adicionarProduto(produto1, quantidade)
        break
    case 2:
        pedido.adicionarProduto(produto2, quantidade)
        break
    case 3:
        pedido.adicionarProduto(produto3, quantidade)
        break
    default:
        console.log("Opção inválida!")
}

console.log(pedido.toString())





















// const prompt = require('prompt-sync')();

// const Cliente = require("./class/Cliente")
// const Produto = require("./class/Produto")
// const Usuario = require("./class/Usuario")
// const Pedido = require("./class/Pedido")


// const produto = new Produto("Calçado feminino", 78, 7)
// const produt = new Produto("calçado masculino", 70, 8)
// const produ = new Produto("calçado infantil", 80, 9)


// const usuario = new Usuario(nome, cpf)
// const pedido = new Pedido(usuario)

// pedido.adicionarProduto(produto, 2)


// const nome = prompt("Digite seu nome: ")
// const cpf = parseInt(prompt("Digite seu CPF sem pontos e traço: "))



// console.log(`
//     produtos disponiveis 
//     1 - produto feminino
//     2 - produto masculino
//     3 - produto infantil    
// `)

// let option = parseInt(prompt(`
//     Selecione um item: `))

// switch (option) {
//     case 1:
//         console.log(`1 - produto feminino escolhido`)
//         console.log(produto.toString())
//         break
//     case 2:
//         console.log(`2 - produto masculino escolhido`)
//         console.log(produt.toString())
//         break
//     case 3:
//         console.log(`3 - produto infantil escolhido`)
//         console.log(produ.toString())
//         break
//     default:

// }

// console.log(pedido.calcularTotal())































// const cliente = new Cliente("Carlos", 45)

// const pedido = new Pedido(cliente, cliente.carrinho)

// const produto1 = new Produto("conjunto feminino", 60, 4)
// const produto2 = new Produto("conjunto masculino", 45, 5)
// const produto3 = new Produto("conjunto ifantil", 50, 7)

// cliente.adicionarProduto(produto1)
// cliente.adicionarProduto(produto2)
// cliente.adicionarProduto(produto3)



// console.log(user.acessoPedido())
// console.log(`Produtos cadastrados: [
//     ${produto1}
//     ${produto2}
//     ${produto3}
//     ]`)

// console.log("----------------------------------------------------------")
// console.log(cliente.acessoPedido())
// console.log(`Carrinho: [
//     ${produto1}
//     ${produto2}
//     ${produto3}
// ]`)

//console.log(`valor total do pedido: ${pedido.calcularTotal()}`)
