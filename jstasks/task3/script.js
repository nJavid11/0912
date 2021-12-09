//task1
document.getElementById("p1").style.backgroundColor="red"

//task2
let rows = document.querySelector("#rowNumber")
let columns = document.querySelector("#columnNumber")

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    let table = document.querySelector("table")

    for (let i = 0; i < rows.value; i++) {
        let tabRow=document.createElement("tr")
        for (let j = 0; j < columns.value; j++) {
            let tabCol= document.createElement('td')
            tabCol.innerHTML = "row:"+(i+1)+" column:"+(j+1)
            tabRow.append(tabCol)
            
            tabCol.style.border="3px solid black"
        }
     
        table.append(tabRow)
    }
})


//task3
function removeItems(element){
    let list = document.getElementById("myList")
    list.removeChild(list.children[element])
}
removeItems(0)

//task4

const heightOutput = document.querySelector("#height")
const widthOutput = document.querySelector("#width")

function reportWindowSize(){
    heightOutput.textContent = window.innerHeight
    widthOutput.textContent = window.innerWidth
}

window.onresize =reportWindowSize

window.
window.innerHeight
