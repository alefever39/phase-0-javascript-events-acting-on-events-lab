const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const updateLeft = parseInt(leftNumbers, 10);
    if (updateLeft > 0) {
        dodger.style.left = `${updateLeft - 5}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const updateLeft = parseInt(leftNumbers, 10);
    if (updateLeft < 360) {
        dodger.style.left = `${updateLeft + 5}px`;
    }
}

document.addEventListener('keydown', e => {
    if(e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
    if(e.key === "ArrowRight") {
        moveDodgerRight()
    }
})