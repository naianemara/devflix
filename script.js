let botaoSom = document.querySelector(".button-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-irformativo")
let modal = document.querySelector(".modal")
let assistir = document.querySelector(".link-assistir")



botaoSom.addEventListener("click", ligaSom)


function ligaSom(){
    video.muted = !video.muted
}

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}


window.addEventListener("load", tocaAudio)

function tocaAudio() {
    let audio = document.querySelector(".audio")
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}
