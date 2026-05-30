function calcularImpacto() {
    const fertilizante = parseInt(document.getElementById('fertilizante').value);
    const irrigacao = parseInt(document.getElementById('irrigacao').value);
    const rotacao = parseInt(document.getElementById('rotacao').value);

    let impacto = 0;

    // Pontos positivos para práticas sustentáveis
    if (fertilizante === 1) impacto += 2;
    if (irrigacao === 1) impacto += 2;
    if (rotacao === 1) impacto += 3;

    let mensagem = '';
    if (impacto <= 2) mensagem = "Impacto ambiental negativo. Melhorar práticas!";
    else if (impacto <= 5) mensagem = "Impacto moderado. Boa, mas dá para melhorar!";
    else mensagem = "Impacto ambiental positivo! Excelente trabalho sustentável! 🌱";

    document.getElementById('resultado').innerText = mensagem;
}

function responder(correto) {
    const respostaQuiz = document.getElementById('respostaQuiz');
    if (correto) {
        respostaQuiz.innerText = "Correto! Rotação de culturas conserva o solo. ✅";
    } else {
        respostaQuiz.innerText = "Errado! Essa prática prejudica o solo. ❌";
    }
}
