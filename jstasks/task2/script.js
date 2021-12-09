//task1
document.getElementById("myText").style.fontSize="50px"

//task2
let p = document.getElementById("text");
let input = document.getElementById("myInput")
input.addEventListener("keyup", event=>{
    p=p.innerHTML = event.target.value
    console.log(p)
})

//task3
document.getElementById("myText2").setAttribute("title", "myTitle")
document.getElementById("myText2").setAttribute("class", "text")

//task4
document.getElementById("myStatement").style.backgroundColor="red"