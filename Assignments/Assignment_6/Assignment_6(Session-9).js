// Browser Storage
// Create a simple HTML page with:
// One input field (name)
// Two buttons: Save and Load
// On Save:
// Store the value in localStorage
// Store the same value in sessionStorage
// On Load:
// Retrieve and display values from both storages

const input = document.getElementById("name")
const save = document.getElementById("save")
const load = document.getElementById("load")

save.addEventListener("click",onsubmit)
load.addEventListener("click",onload)

function onsubmit(){
    localStorage.setItem('data',input.value)
    sessionStorage.setItem('data',input.value)
}

function onload(){
    let op = document.getElementById("op")
    op.innerHTML = "Local Data : " + localStorage.getItem("data") + " Session Data : " + sessionStorage.getItem("data");
}



