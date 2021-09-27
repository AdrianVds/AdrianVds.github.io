const btnTexto = document.querySelector("#btn-texto");
const titulo0 = document.querySelector("#titulo");
const imagem = document.querySelector("#img");

window.onload = function() {
    alert("Bem-vindo ao Jogo de Humor Pinscher");
};
btnTexto.addEventListener("click", function() {
    if(titulo0.innerText === "Situação do Pinscher: Normal"){
        titulo0.innerText = "Situação do Pinscher: Feliz";
        imagem.src = "feliz.jpg";
    }else if(titulo0.innerText === "Situação do Pinscher: Feliz"){
        titulo0.innerText = "Situação do Pinscher: Medo";
        imagem.src = "medo.jpg";
    }else if(titulo0.innerText === "Situação do Pinscher: Medo"){
        titulo0.innerText = "Situação do Pinscher: Triste";
        imagem.src = "triste.jpg";
    }else if(titulo0.innerText === "Situação do Pinscher: Triste"){
        titulo0.innerText = "Situação do Pinscher: Bravo";
        imagem.src = "bravo.jpg";
    }else if(titulo0.innerText === "Situação do Pinscher: Bravo"){
        titulo0.innerText = "Situação do Pinscher: Normal";
        imagem.src = "normal.jpg";
    }
})
