function veiculo(moto) {
    this.moto = moto;
    this.empresa = function() {
        console.log(this.modelo + " Moto bikers");
    }
    this.loja = function() {
        console.log(this.modelo + " motors");
    }

}

function marca(moto, modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;

    this.dizmoto = function() {
        console.log(this.moto);
    }

    this.dizmodelo = function() {
        console.log(this.modelo);
    }

    this.dizano = function() {
        console.log(this.ano);
    }

    veiculo.call(this, moto);
}

const marca1 = new marca("CBR", "Honda", 2020);
const marca2 = new marca ("tiger-900", "triumph", 2023);
marca1.empresa();
marca1.dizmoto();
marca1.dizmodelo();
marca1.dizano();

marca2.loja();
marca2.dizmoto();
marca2.dizmodelo();
marca2.dizano();


