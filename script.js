const somVitoria = new Audio("Sons/Win.mp3");
const somDerrota = new Audio("Sons/Derrota.mp3");
const somEmpate = new Audio("Sons/Empate.mp3");

// Recupera a pontuação salva ou define 0 se não houver dados
let pontuacaoUsuario = localStorage.getItem("pontuacaoUsuario") ? parseInt(localStorage.getItem("pontuacaoUsuario")) : 0;
let pontuacaoComputador = localStorage.getItem("pontuacaoComputador") ? parseInt(localStorage.getItem("pontuacaoComputador")) : 0;

// Atualiza o placar na tela ao carregar a página
document.getElementById("placar").innerText = `Você: ${pontuacaoUsuario} | Computador: ${pontuacaoComputador}`;

function jogar(escolhaUsuario) {
    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate! 😐";
        somEmpate.play();
        document.body.style.backgroundColor = "#f4f4f4"; // Cor neutra
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        resultado = "Você venceu! 🎉";
        somVitoria.play();
        pontuacaoUsuario++;
        document.body.style.backgroundColor = "#8cff8c"; // Verde (Vitória)
        localStorage.setItem("pontuacaoUsuario", pontuacaoUsuario);
    } else {
        resultado = "O computador venceu! 🤖";
        pontuacaoComputador++;
        somDerrota.play();
        document.body.style.backgroundColor = "#ff8c8c"; // Vermelho (Derrota)
        localStorage.setItem("pontuacaoComputador", pontuacaoComputador);
    }

    document.getElementById("resultado").innerText = 
        `Você escolheu ${escolhaUsuario} e o computador escolheu ${escolhaComputador}. ${resultado}`;

    document.getElementById("placar").innerText = 
        `Você: ${pontuacaoUsuario} | Computador: ${pontuacaoComputador}`;
}

// Função para resetar o placar
function resetar() {
    localStorage.setItem("pontuacaoUsuario", 0);
    localStorage.setItem("pontuacaoComputador", 0);
    pontuacaoUsuario = 0;
    pontuacaoComputador = 0;
    document.getElementById("placar").innerText = `Você: 0 | Computador: 0`;
    document.getElementById("resultado").innerText = 'Escolha sua jogada!';
    document.body.style.backgroundColor = "#222222";
}