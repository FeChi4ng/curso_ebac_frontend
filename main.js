function veiculo(moto) {
    this.moto = moto;
    this.empresa = function() {
        console.log(this.modelo + " Moto bikers");
    }
    this.loja = function() {
        console.log(this.modelo + " motors");
    }
    this.carroECia = function() {
        console.log(this.ferrari + " E luxos");
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

function duasRodas(honda, yamaha, ducati) {
    this.honda = honda;
    this.yamaha = yamaha;
    this.ducati = ducati

    this.mthonda = function() {
        console.log(this.honda);
    }

    this.mtyamaha = function() {
        console.log(this.yamaha);
    }

    this.mtducati = function() {
        console.log(this.ducati);
    }

    veiculo.call(this.moto);
}

function carroEMoto(ferrari, porsche, lamborghini) {
    this.ferrari = ferrari;
    this.porsche = porsche;
    this.lamborghini = lamborghini;

    this.carferrari = function() {
        console.log(this.ferrari);
    }
    this.carporsche = function() {
        console.log(this.porsche);
    }
    this.carlamborghini = function() {
        console.log(this.lamborghini);
    }

    veiculo.call(this.moto);
}





const marca1 = new marca("CBR", "Honda", 2020);
const marca2 = new marca ("tiger-900", "triumph", 2023);
const marca3  = new duasRodas("CBR", "R1", "ducati");
const carro1 = new carroEMoto("Ferrari 458", "GT3 RS", "Urus");

marca1.empresa();
marca1.dizmoto();
marca1.dizmodelo();
marca1.dizano();

marca2.loja();
marca2.dizmoto();
marca2.dizmodelo();
marca2.dizano();

marca3.mthonda();
marca3.mtyamaha();
marca3.mtducati();

carro1.carferrari();
carro1.carporsche();
carro1.carlamborghini();

