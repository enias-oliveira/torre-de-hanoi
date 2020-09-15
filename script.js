let selectorMode = true
let selectedTorre = undefined

document.querySelectorAll(".torres").forEach(item => item.addEventListener('click',moveDisco))

function moveDisco(e) {
    
    let discInTorre = e.currentTarget.childElementCount

    if (selectorMode) {
        if (discInTorre) {
            selectedTorre = e.currentTarget
            selectorMode = false
            console.log(selectedTorre)
        } 
    } else (insertDisco(e.currentTarget))
}


function insertDisco(e) {
    e.appendChild(selectedTorre.lastElementChild)
    selectorMode = true
}
