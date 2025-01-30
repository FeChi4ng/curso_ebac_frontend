function calcula(base: 20, altura: 50): number {
    return base * altura;
}

class pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOla(): String {
        return `${this.nome} disse oi`;
    }
}