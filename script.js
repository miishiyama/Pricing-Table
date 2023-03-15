let Free = document.getElementById("buttonFree")

let Basico = document.getElementById("buttonBasico")

let Profissional = document.getElementById("buttonProfissional")

Free.onclick = function () {
    Free.classList.add("blue")
    Basico.classList.add("white")
    Profissional.classList.remove("blue")
}

Basico.onclick = function () {
    Free.classList.remove("blue")
    Basico.classList.remove("white")
    Profissional.classList.remove("blue")
}

Profissional.onclick = function () {
    Free.classList.remove("blue")
    Basico.classList.add("white")
    Profissional.classList.add("blue")
}
