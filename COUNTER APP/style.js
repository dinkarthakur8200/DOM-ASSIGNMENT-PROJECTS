const decrementBtn = document.getElementById("decrementBtn");
const displaybtn = document.getElementById("displayvalue");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

// now I'm going to use add event listner.....
// To give Functionanlity to The Following buttons.

// functionality to decrement btn.....
decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText = value-1
    }
    else{
        alert("Negative value not allowed .");
        alert("Reccommended By DINKAR THAKUR");
    }
});
// functinality to increment btn....
incrementBtn.addEventListener("click",() =>{
    const value = Number(displayValue.innerText);
    if(value>=12){
        alert("12+ value are not allowed.")
    }
    else{
        displayValue.innerText = value+1;
    }
});
// functionality to reset btn.....
resetBtn.addEventListener("click",() => {
    displayValue.innerText = 0;
})