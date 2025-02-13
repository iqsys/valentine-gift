function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.position = "absolute";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 500);