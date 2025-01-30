function calcula(base: number, altura: number): number {
    return base * altura;
}

class pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}