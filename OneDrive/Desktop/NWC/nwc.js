const Research = document.getElementById("Research");
// const student = document.getElementById("students")
const events = document.getElementById("events")
const spec= document.getElementById("spec")



function redirectToPages() {
    var select = document.getElementById("specializationSelect");
    var selectedValue = select.value;

    if (selectedValue) {
        window.location.href = selectedValue; 
    }
}

function redirectToPagess(){
    var selection = document.getElementById("events");
    var selectedValue = selection.value;

    if (selectedValue) {
        window.location.href = selectedValue; 
    }
}


function redirectToPagesss(){
    var selection = document.getElementById("Research");
    var selectedValue = selection.value;

    if (selectedValue) {
        window.location.href = selectedValue; 
    }
}

function redirectToPage(){
    var selection = document.getElementById("faculty");
    var selectedValue = selection.value;

    if (selectedValue) {
        window.location.href = selectedValue; 
    }
}

function redirectToPagessss(){
    var selection = document.getElementById("students");
    var selectedValue = selection.value;

    if (selectedValue) {
        window.location.href = selectedValue; 
    }
}

function redirectToPa() {
    var select = document.getElementById("HomePage");
    var selectedValue = select.value;

    if (selectedValue) {
        window.location.href = selectedValue; 
    }
}
