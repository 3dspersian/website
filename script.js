document.getElementById("colorChangeBtn").addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.querySelector("h1").style.color = randomColor;
    document.querySelector("p").style.color = randomColor;
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
