let candidato = " ";
 estadoCandidato = "lista";

switch (estadoCandidato) {
    case "aprovada":
        mensagem = "aprovada";
        break;

    case "lista":
        mensagem = "lista";
        break; 

    case "reprovada":
        mensagem = "reprovada";
        break;

    default:
        mensagem = "Não se aplica";
        break;
}
console.log(mensagem);