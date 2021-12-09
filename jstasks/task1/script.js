
let radius = document.querySelector("#rad")
let volume = document.querySelector("#vol")

document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    let fvol = 4 / 3 * (Math.PI * Math.pow(radius.value, 3))
    volume.value = fvol
});

