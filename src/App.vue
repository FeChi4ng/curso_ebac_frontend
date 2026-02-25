<script setup>
  import { ref, computed } from 'vue'

const numero1 = ref(0)
const numero2 = ref(0)
const operacao = ref('soma')

const resultado = computed(() => {
  switch(operacao.value) {
    case 'soma':
      return numero1.value + numero2.value
    case 'subtracao':
      return numero1.value - numero2.value
    case 'multiplicacao':
      return numero1.value * numero2.value
    case 'divisao':
      return numero2.value === 0 ? null : numero1.value / numero2.value
    default:
      return 0
  }
})

const resultadoFormatado = computed(() => {
  if (resultado.value === null) return '---'
  if (Number.isInteger(resultado.value)) return resultado.value
  return resultado.value.toFixed(2)
})

const temErro = computed(() => {
  return operacao.value === 'divisao' && numero2.value === 0
})

const mensagemErro = computed(() => {
  return 'Divisão por zero não é permitida!'
})

const titulo = 'Calculadora Aritmética'
</script>

<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    
    <div class="campo">
      <label>Primeiro Número:</label>
      <input 
        type="number" 
        v-model.number="numero1" 
        placeholder="Digite o primeiro número"
        step="any"
      >
    </div>
    
    <div class="campo">
      <label>Segundo Número:</label>
      <input 
        type="number" 
        v-model.number="numero2" 
        placeholder="Digite o segundo número"
        step="any"
      >
    </div>
    
    <div class="campo">
      <label>Operação:</label>
      <select v-model="operacao">
        <option value="soma">Soma (+)</option>
        <option value="subtracao">Subtração (-)</option>
        <option value="multiplicacao">Multiplicação ()</option>
        <option value="divisao">Divisão (÷)</option>
      </select>
    </div>
    
    <div class="resultado" :class="{ erro: temErro }">
      <h2>Resultado:</h2>
      <p class="valor">{{ resultadoFormatado }}</p>
      <p v-if="temErro" class="mensagem-erro">⚠️ {{ mensagemErro }}</p>
    </div>
    
    <p class="info">* Atualização automática</p>
  </div>
</template>

<style scoped>
  .container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.campo {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #666;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

input:focus, select:focus {
  outline: none;
  border-color: #42b883;
}

.resultado {
  margin-top: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 5px;
  text-align: center;
}

.resultado.erro {
  background: #ffebee;
}

.valor {
  font-size: 48px;
  font-weight: bold;
  color: #42b883;
  margin: 10px 0;
}

.erro .valor {
  color: #999;
}

.mensagem-erro {
  color: #f44336;
  margin-top: 10px;
}

.info {
  text-align: center;
  color: #999;
  font-size: 12px;
  margin-top: 20px;
}
</style>
