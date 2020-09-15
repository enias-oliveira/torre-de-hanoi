let selectorMode = true
let selectedTorre = undefined
let selectDisc = 0
let currentDisc = 0

document.querySelectorAll(".torres").forEach(item => item.addEventListener('click',moveDisco))

function moveDisco(e) {
    
    let discInTorre = e.currentTarget.childElementCount

    if (selectorMode) {
        if (discInTorre) {
            selectedTorre = e.currentTarget
            selectDisc = e.currentTarget.lastElementChild.clientWidth
            selectorMode = false
            console.log(selectDisc)
            console.log(selectedTorre)
        } 
    } else (insertDisco(e.currentTarget))

    function insertDisco(e) {
        if (discInTorre) {
            currentDisc = e.lastElementChild.clientWidth
            console.log(currentDisc)
            if (selectDisc < currentDisc) {
                e.appendChild(selectedTorre.lastElementChild)
                selectorMode = true
            } else {
                alert("Você não pode colocar um disco maior em cima de um menor")
                selectorMode = true
            }
        } else {
            console.log(currentDisc)
            e.appendChild(selectedTorre.lastElementChild)
            selectorMode = true
        }
    }

}



    

