

var anoNascimento = prompt('Por favor informe o ano do seu nascimento');


while(anoNascimento >= 2024){
    window.alert('Por favor informe seu ano de nascimento corretamente')
    anoNascimento = prompt('Por favor informe seu ano de nascimento')
}


var anoAtual = prompt('E qual é seu ano ? ');
var idadeFinal = anoAtual - anoNascimento;



window.alert( idadeFinal );