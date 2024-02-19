//  mouseout event

// The mouseout event is fired at an Element when a pointing device (usually a mouse)
//  is used to move the cursor so that it is no longer contained within the element or one of its children.

const boxElement = document.getElementById("Mouse_out_btn");

// add a mouseout event listener to the element
boxElement.addEventListener("mouseout", function () {
  alert("You left the safe zone 🙅 (Mouse out event working properly)");
});