// const nomeCard = document.querySelectorAll(".titulo-card")
// nomeCard = nomeCard.innerText.replace("Growdev", "Meu Card")
// document.querySelector('.titulo-card').innerText = nomeCard


const nomeCards = document.querySelectorAll(".titulo-card");

nomeCards.forEach(card => {
    card.innerText = card.innerText.replace("Growdev", "Meu Card");
});
//da para por aqui dentro 

const paragrafos = document.querySelectorAll("p")

paragrafos.forEach(paragrafo => {
    paragrafo.textContent = "Descrição modificada pelo JavaScript"
})

function editar() {
    alert('Clicou em editar')
}

function apagarCard() {
    const confirmacao = confirm("Tem certeza de que deseja excluir o card?");

    if(confirmacao) {
        alert("Confirmado!");
    } else {
        alert("Cancelou!")
    }
}

const botaoApagar = document.querySelectorAll('.botao-apagar');

botaoApagar.forEach(function(botao) { 
    botao.onclick = apagarCard;
})

