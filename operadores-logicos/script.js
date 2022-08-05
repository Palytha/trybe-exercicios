/*const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
*/

/*
  
    Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
    Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
    Implemente condicionais para que:

    Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
    Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
    Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
    Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
    Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

    Agora imprima a variável message fora das suas condições.

    Operador OR ||

    const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
  
*/

const currentHour = 6; // numeros de 1 à 24
let message = '';

if ( currentHour >= 22){
    message = ('Não deveríamos comer nada, é hora de dormir');
} else if (currentHour >= 18 && currentHour < 22){
    message = ('Rango da noite, camos jantar :D');
} else if (currentHour >= 14 && currentHour <= 18) {
    message = ('Vamos fazer um bolo pro café da tarde?');
} else if (currentHour <= 11 && currentHour <= 14) {
    message = ('Hora do almoço.');
} else {
    message = ('Hmmm, cheiro de café recém passado');
}

console.log(message);

/*

    Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
    Implemente condicionais para que:

    Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
    Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

*/

let weekDay = 'quarta-feira';

if (weekDay === 'segunda-feira' || weekDay === 'terca-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-ferira' || weekDay === 'sexta-feira') {
    console.log('FINALMENTE, descanso merecido UwU');
}

