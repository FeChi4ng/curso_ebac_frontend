"use strict";

var alunos = [{
  nome: "Ana Silva",
  nota: 8.5
}, {
  nome: "Bruno Santos",
  nota: 5.0
}, {
  nome: "Carla Oliveira",
  nota: 6.7
}, {
  nome: "Daniel Costa",
  nota: 4.3
}, {
  nome: "Eduarda Lima",
  nota: 9.2
}, {
  nome: "Felipe Souza",
  nota: 6.0
}, {
  nome: "Gabriela Rocha",
  nota: 7.8
}, {
  nome: "Henrique Alves",
  nota: 3.5
}];
function alunosAprovados(listaAlunos) {
  return listaAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var resultado = alunosAprovados(alunos);
console.log("Resultado dos alunos aprovados:");
resultado.forEach(function (aluno, index) {
  console.log("".concat(index + 1, ". ").concat(aluno.nome, " - Nota: ").concat(aluno.nota));
});