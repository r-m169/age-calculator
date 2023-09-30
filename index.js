const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const dayOutput = document.getElementById("DD");
const monthOutput = document.getElementById("MM");
const yearOutput = document.getElementById("YY");
const date = new Date();
let day = date.getDate();   // if today is 30-9-2023 the output of this is 30
let month = date.getMonth() + 1; // + 1 to get the actual month because getMonth() is zero based 
let year = date.getFullYear();
const form = document.querySelector("form");
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function validation(){
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((iterator)=>{
        if(dayInput.value > 31){
            dayInput.style.borderColor = "red";
            dayInput.parentElement.querySelector("small").innerHTML = "must be valid day ";
            validator = false;
        }else if(monthInput.value > 12){
            monthInput.style.borderColor = "red";
            monthInput.parentElement.querySelector("small").innerHTML = "must be valid month ";
            validator = false ; 
        }else if (!iterator.value){
            iterator.style.borderColor = "red" ; 
            iterator.parentElement.querySelector("small").innerHTML = "this field is required"
            validator = false
        }
        iterator.style.borderColor = "black" ; 
        iterator.parentElement.querySelector("small").innerHTML = " ";
        validator = true ; 
    });
    return validator;
}

function handleSubmit(e){
    e.preventDefault();
    if(validation()){
        if(dayInput.value > day){
            day = day + months[month - 1];
            month = month - 1 ;
        }
        if(monthInput.value > month){
            month = month + 12 ; 
            year = year - 1 ;
        }
        const dd = day - dayInput.value;
        const mm = month - monthInput.value;
        const yy = year - yearInput.value;
    
        dayOutput.innerHTML = dd;
        monthOutput.innerHTML = mm;
        yearOutput.innerHTML = yy;
    }
}
form.addEventListener("submit", handleSubmit);