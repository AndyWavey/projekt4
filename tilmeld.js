let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let button = document.getElementById("ok");

myBtn.onclick = function() {
  modal.style.display = "block";
}

ok.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
