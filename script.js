let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;

function jogar(escolhaUsuario) {
    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate! 😐";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        resultado = "Você venceu! 🎉";
        pontuacaoUsuario++;
    } else {
        resultado = "O computador venceu! 🤖";
        pontuacaoComputador++;
    }

    document.getElementById("resultado").innerText = 
        `Você escolheu ${escolhaUsuario} e o computador escolheu ${escolhaComputador}. ${resultado}`;

    document.getElementById("placar").innerText = 
        `Você: ${pontuacaoUsuario} | Computador: ${pontuacaoComputador}`;
}
