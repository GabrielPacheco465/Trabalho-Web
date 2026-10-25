/* =========================================================
   GP MOTORS - JavaScript
   Usado nas páginas Veículos e Sobre.
   Cada função só faz algo se encontrar os elementos da página.
   ========================================================= */


/* ---------------------------------------------------------
   VEÍCULOS: busca, filtro de preço e botão "Tenho interesse"
   --------------------------------------------------------- */

function iniciarVeiculos() {
    const busca = document.getElementById("busca");

    if (!busca) return;

    const preco = document.getElementById("preco");
    const cards = document.querySelectorAll(".veiculo");
    const aviso = document.getElementById("sem-resultados");
    const interesse = document.getElementById("interesse-salvo");
    const interesseTexto = document.getElementById("interesse-texto");
    const limpar = document.getElementById("limpar-interesse");

    // Mostra o último carro em que a pessoa demonstrou interesse
    const veiculoSalvo = localStorage.getItem("veiculoInteresse");

    if (veiculoSalvo) {
        interesseTexto.innerText = "Último veículo de interesse: " + veiculoSalvo;
        interesse.hidden = false;
    }

    // Esconde o aviso e apaga o carro salvo
    limpar.addEventListener("click", function () {
        localStorage.removeItem("veiculoInteresse");
        interesse.hidden = true;
    });

    // Mostra só os carros que combinam com o nome e com o preço máximo
    function filtrar() {
        const texto = busca.value.toLowerCase();
        const precoMaximo = Number(preco.value);
        let encontrados = 0;

        cards.forEach(function (card) {
            const nome = card.dataset.nome.toLowerCase();
            const precoCard = Number(card.dataset.preco);

            const combinaNome = nome.includes(texto);
            const combinaPreco = precoMaximo === 0 || precoCard <= precoMaximo;

            if (combinaNome && combinaPreco) {
                card.style.display = "flex";
                encontrados++;
            } else {
                card.style.display = "none";
            }
        });

        // Mostra o aviso se nenhum carro foi encontrado
        aviso.hidden = encontrados > 0;
    }

    busca.addEventListener("input", filtrar);   // a cada letra digitada
    preco.addEventListener("change", filtrar);  // ao escolher outro preço

    // Ao clicar em "Tenho interesse", guarda o carro escolhido
    cards.forEach(function (card) {
        const botao = card.querySelector(".botao");

        botao.addEventListener("click", function () {
            localStorage.setItem("veiculoInteresse", card.dataset.nome);
        });
    });
}


/* ---------------------------------------------------------
   SOBRE: validação do formulário e LocalStorage
   --------------------------------------------------------- */

function iniciarFormulario() {
    const form = document.getElementById("form-opiniao");

    if (!form) return;

    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email");
    const campoAssunto = document.getElementById("assunto");
    const campoMensagem = document.getElementById("mensagem");
    const erro = document.getElementById("erro-form");
    const sucesso = document.getElementById("sucesso");

    // Se a pessoa já enviou uma opinião antes, preenche o nome e o e-mail
    campoNome.value = localStorage.getItem("nome") || "";
    campoEmail.value = localStorage.getItem("email") || "";

    form.addEventListener("submit", function (evento) {
        evento.preventDefault(); // impede a página de recarregar

        const nome = campoNome.value.trim();
        const email = campoEmail.value.trim();
        const assunto = campoAssunto.value;
        const mensagem = campoMensagem.value.trim();

        // Limpa o erro anterior: some a borda vermelha e a mensagem de sucesso
        [campoNome, campoEmail, campoAssunto, campoMensagem].forEach(function (campo) {
            campo.classList.remove("invalido");
        });
        sucesso.hidden = true;

        // Validações simples: mostra o erro e marca o campo com problema
        if (nome.length < 3) {
            erro.innerText = "Digite seu nome (mínimo 3 letras).";
            campoNome.classList.add("invalido");
        } else if (!email.includes("@")) {
            erro.innerText = "Digite um e-mail válido.";
            campoEmail.classList.add("invalido");
        } else if (assunto === "") {
            erro.innerText = "Selecione um assunto.";
            campoAssunto.classList.add("invalido");
        } else if (mensagem.length < 10) {
            erro.innerText = "A mensagem precisa ter pelo menos 10 caracteres.";
            campoMensagem.classList.add("invalido");
        } else {
            // Tudo certo: salva só o nome e o e-mail (a mensagem não precisa ficar guardada)
            localStorage.setItem("nome", nome);
            localStorage.setItem("email", email);

            // Mostra a confirmação e limpa os campos assunto e mensagem
            erro.innerText = "";
            sucesso.innerText = "Obrigado, " + nome + "! Sua opinião foi enviada.";
            sucesso.hidden = false;

            campoAssunto.value = "";
            campoMensagem.value = "";
        }
    });
}


/* ---------------------------------------------------------
   Executa tudo quando a página terminar de carregar
   --------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    iniciarVeiculos();
    iniciarFormulario();
});
