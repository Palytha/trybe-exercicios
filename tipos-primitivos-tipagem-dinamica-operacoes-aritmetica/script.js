/*

*/
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

/*

    Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
    Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
    Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

*/

const base = 5;
const height = 8;
const area = base * height
const areaRetangulo = (base + base + height + height )

console.log(`O valor da área é ${area}.`);
console.log(`A soma dos lados do retâgulo é ${areaRetangulo}.`);

