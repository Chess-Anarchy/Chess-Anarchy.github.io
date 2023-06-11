const topBar = document.getElementById('top_bar');

document.addEventListener("mouseover", moveButton, false);

function moveButton(e) {
    var mouseoverElement = e.target
    if (mouseoverElement.classList.contains('top_bar_button')) {
        topBar.style.left = (Math.random() * 20 + 40) + '%';
    }
}