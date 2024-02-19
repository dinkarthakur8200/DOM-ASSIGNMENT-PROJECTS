// let's get the button...

const display = document.getElementById("display");
const inputvalue = document.getElementById("input-box");

// Now  i'm going to add the addeventlistner....

inputvalue.addEventListener("keypress" , function(e){
    display.innerText = "You  have pressed   " + e.key;
})