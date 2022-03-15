// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var button = document.getElementById("nej")[0];

var modals = document.getElementById("myModals");

var button = document.getElementById("ja");

var button = document.getElementById("ok")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
nej.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//2nd modal//
ja.onclick = function() {
  modals.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ok.onclick = function() {
  modals.style.display = "none"
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modals) {
    modals.style.display = "none"
    modal.style.display = "none"
    ;
  }
}
