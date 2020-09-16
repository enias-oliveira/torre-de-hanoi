const hanoi = document.querySelector(".hanoi")

const divPalito1 = document.createElement("div")
const divPalito2 = document.createElement("div")
const divPalito3 = document.createElement("div")

divPalito1.className = "palito palito1"
divPalito2.className = "palito palito2"
divPalito3.className = "palito palito3"

const divTower1 = document.createElement("div")
const divTower2 = document.createElement("div")
const divTower3 = document.createElement("div")

divTower1.className = "torres primeiraTorre"
divTower2.className = "torres segundaTorre"
divTower3.className = "torres terceiraTorre"

hanoi.appendChild(divPalito1)
hanoi.appendChild(divPalito2)
hanoi.appendChild(divPalito3)

const palito1 = document.querySelector(".palito1")
const palito2 = document.querySelector(".palito2")
const palito3 = document.querySelector(".palito3")

palito1.appendChild(divTower1)
palito2.appendChild(divTower2)
palito3.appendChild(divTower3)

const divDisco1 = document.createElement("div")
const divDisco2 = document.createElement("div")
const divDisco3 = document.createElement("div")
const divDisco4 = document.createElement("div")

divDisco1.className = "discos disco1"
divDisco2.className = "discos disco2"
divDisco3.className = "discos disco3"
divDisco4.className = "discos disco4"

divTower1.appendChild(divDisco1)
divTower1.appendChild(divDisco2)
divTower1.appendChild(divDisco3)
divTower1.appendChild(divDisco4)