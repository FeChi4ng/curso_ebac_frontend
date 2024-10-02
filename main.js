const form = document.getElementById("contato");
const inputName = document.getElementById("input-name");
const inputTel = document.getElementById("input-tel");
const names = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    atualizaLista();
})

function adicionaContato() {
    const numero = formatarNumero(inputTel.value.trim());

    if (!numero) {
        return inputTel.value = '';
    }

    if (telefones.includes(numero)) {
        alert(`O número ${numero} já foi adicionado nos contatos`);
    } else {
        names.push(inputName.value);
        telefones.push(numero);

        let linha = '<tr>';
        linha += `<td>${inputName.value}</td>`;
        linha += `<td>${numero}</td>`;
        linha += `<td><a href="tel:${numero}" target="_blank"  id="btn-ligar"><img src="./imagens/telefone.png"/></a><button id="btn-excluir" onclick="excluir(${inputName.length -1})">Excluir</button></td>`;
        linha += '</tr>';
        
        linhas += linha;
    }
    inputName.value = '';
    inputTel.value = '';    
}

function atualizaLista(){
    const table = document.querySelector('tbody');
    table.innerHTML = linhas;
}

function excluir(index) {
    names.splice(index, 1);
    telefones.splice(index, 1);

    atualizaLinhas();
    atualizaLista();
}

function atualizaLinhas() {
    linhas = '';

    for (let i = 0; i < names.length; i++) {
        let linha = '<tr>';
        linha += `<td>${names[i]}</td>`;
        linha += `<td>${telefones[i]}</td>`;
        linha += `<td><a href="tel:${inputTel.value}" target="_blank"  id="btn-ligar"><img src="./imagens/telefone.png"/></a><button id="btn-excluir" onclick="excluir(${i})">Excluir</button></td>`;
        linha += '</tr>';

        linhas += linha;
    }
}

function formatarNumero(numero) {
    /* 
    --> No lugar de \D poderia colocar [^0-9} - Significa qualquer caractere que não seja um dígito de 0 a 9 
    --> // significa que o que está entre eles deve ser tratado de for especial ou escapado, no caso \D 
    */
    numero = numero.replace(/\D/g,'');
    
    if (numero.length === 11) {
        return `(${numero.substring(0, 2)}) ${numero.substring(2, 7)}-${numero.substring(7)}`;
    } else {
        alert(`Número Inválido. Por favor, insira o DDD e o número completo com 11 dígitos.`);
    }
}