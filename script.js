let torres = document.querySelectorAll(".torres")

torres.forEach(item => item.addEventListener("click", movimento))

function movimento (elemento) {
    console.log(elemento.currentTarget)
    console.log()
}