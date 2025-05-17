// Modificação de Código HTML
function modificarConteudo() {
    const paragrafo = document.getElementById('meuParagrafo');
    paragrafo.textContent = 'Novo texto modificado dinamicamente!';
}

// Soma de dois números
const numero1 = 10;
const numero2 = 20;

const soma = numero1 + numero2;
const mensagem = `A soma de ${numero1} e ${numero2} é ${soma}.`;

console.log(mensagem);

// Separar duas sentenças com ponto e vírgula
const duasSentencas = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo";
const frasesSeparadas = duasSentencas.split(';');

console.log(frasesSeparadas);