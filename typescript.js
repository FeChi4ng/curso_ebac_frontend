"use strict";
// function calcula(base: 20, altura: 50): number {
//     return base * altura;
// }
class pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
