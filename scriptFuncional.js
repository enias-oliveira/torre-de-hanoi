
let selectorMode = true
let selectedTorre = undefined
let selectedDiscWidth = 0
let currentTowerDiscWidth = 0
let movimento = 0
const contador = document.querySelector(".contadorMovimento")
const main = document.querySelector("main")
const victoryHead = document.createElement("h2")
const hanoiGameSection = document.querySelector(".hanoi")

console.log(contador)

document.querySelectorAll(".torres").forEach(item => item.addEventListener('click',moveDisco))

function moveDisco(e) {
    
    let discInTorre = e.currentTarget.childElementCount

    if (selectorMode) {
        if (discInTorre) {
            selectedTorre = e.currentTarget
            selectedDiscWidth = e.currentTarget.lastElementChild.clientWidth
            selectorMode = false
            console.log(selectedDiscWidth)
            console.log(selectedTorre)
        } 
    } else (insertDisco(e.currentTarget))

    function insertDisco(tower) {
        if (discInTorre) {
            currentTowerDiscWidth = tower.lastElementChild.clientWidth
            console.log(currentTowerDiscWidth)
            if (selectedDiscWidth < currentTowerDiscWidth) {
                tower.appendChild(selectedTorre.lastElementChild)
                selectorMode = true
                movimento += 1
                contador.innerText = movimento
                victoryConfirm(tower)
            } else {
                alert("Você não pode colocar um disco maior em cima de um menor")
                selectorMode = true
            }
        } else {
            console.log(currentTowerDiscWidth)
            tower.appendChild(selectedTorre.lastElementChild)
            selectorMode = true
            movimento += 1
            contador.innerText = movimento
        }
    }

    function victoryConfirm(tower){
        if (tower.childElementCount === 4) {
            victoryHead.innerText = "Parabéns, você venceu!"
            main.insertBefore(victoryHead,hanoiGameSection)
        }
    }
}



    

