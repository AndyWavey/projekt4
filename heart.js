const heart = document.getElementById('heart-icon')
const btn = document.getElementById ('btn')
btn.addEventListener("click", toggleLike)

function toggleLike() {
    console.log("hello")
    if (heart.textContent === "favorite_border"){
        heart.textContent = "favorite"
        heart.style.color = "#f2cac1"
        btn.ariaChecked = "true"


    } else {
        heart.textContent = "favorite_border"
        heart.style.color = "#595959"
        btn.ariaChecked = "false"
    }
}