var readline = require('readline');
var cpf = '';

var read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question('Qual é o cpf a ser validado?\n', (rawCpf) => {
  cpf = rawCpf;
  read.close();
  const newCpf = cpf.replace(/\.|-/g,'');
  var sum = 0;
  var rest = 0;
  
  for (i = 0; i < newCpf.length - 2; i ++) {
    sum = sum + (parseInt(newCpf.substr(i, 1)) * (10 - i));
    rest = (sum * 10) % 11;
  }
  
  if ((rest == 10) || (rest == 11)) {
    rest = 0;
  }
  
  if (rest != parseInt(newCpf.substr(9, 1))) {
    return;
  }
  
  sum = 0;
  rest = 0;
  
  for (i = 0; i < newCpf.length - 1; i ++) {
    sum = sum + (parseInt(newCpf.substr(i, 1)) * (11 - i));
    rest = (sum * 10) % 11;
  }
  
  if ((rest == 10) || (rest == 11)) {
    rest = 0;
  }
  
  if (rest != parseInt(newCpf.substr(10, 1))) {
    return;
  }
  
  console.log('O CPF', cpf, 'é válido');
})

