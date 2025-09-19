class Usuario{
    #nome
    #cpf
    #produto
    constructor(nome, cpf, produto){
        this.#nome = nome
        this.#cpf = cpf
        this.#produto = produto
    }

    get nome(){
        return this.#nome
    }

    set nome(valor){
        this.#nome = valor
    }

    get cpf(){
        return this.#cpf 
    }

    set cpf(valor){
        this.#cpf = valor
    }

    get produto(){
        return this.#produto
    }

    set produto(valor){
        this.#produto = valor
    }


    // adicionarProduto(){

    // }
}

module.exports = Usuario;