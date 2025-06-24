const { somar } = require('./index.js');

console.log('Testando a função somar...');
if (somar(2, 2) !== 4) {
  console.error('Falha no teste: 2 + 2 deveria ser 4');
  process.exit(1); // Falha o build se o teste não passar
}

console.log('Teste da função somar passou!');
