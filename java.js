window.addEventListener("keydown", movePlayer);

function movePlayer(event) {
    var player = document.getElementById("player");
    var leftPosition = parseInt(window.getComputedStyle(player).getPropertyValue("left"));

    if (event.key === "ArrowLeft" && leftPosition > 0) {
        player.style.left = (leftPosition - 10) + "px";
    }
    else if (event.key === "ArrowRight" && leftPosition < 380) {
        player.style.left = (leftPosition + 10) + "px";
    }
    else if (event.key === " ") {
        shoot();
    }
}

function shoot() {
    var bullet = document.createElement("div");
    bullet.classList.add("bullet");
    document.getElementById("game-container").appendChild(bullet);
    playShootSound();

    var bottomPosition = 0;
    var timer = setInterval(function() {
        bottomPosition += 10;
        bullet.style.bottom = bottomPosition + "px";

        if (bottomPosition > 300) {
            clearInterval(timer);
            bullet.parentNode.removeChild(bullet);
        }
    }, 20);
}

function playShootSound() {
    var audio = document.getElementById("shoot-sound");
    audio.currentTime = 0;
    audio.play();
}
