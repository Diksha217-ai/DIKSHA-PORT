let ballPosition = Math.floor(Math.random() * 3);
let isShuffling = false;

function shuffleCups() {
    if (isShuffling) return;
    isShuffling = true;

    document.getElementById('shuffle-sound').play();

    const cups = document.querySelectorAll('.cup');
    cups.forEach(cup => cup.classList.add('shuffle'));

    setTimeout(() => {
        cups.forEach(cup => cup.classList.remove('shuffle'));
        ballPosition = Math.floor(Math.random() * 3); // Randomly hide the ball again
        isShuffling = false;
    }, 1500);
}

function checkBall(selectedIndex) {
    if (isShuffling) return;

    const balls = document.querySelectorAll('.ball');
    balls.forEach(ball => ball.style.visibility = 'hidden');

    if (selectedIndex === ballPosition) {
        document.getElementById('win-sound').play();
        document.getElementById('message').innerHTML = "🎉 You found the ball! 🎉";
        balls[selectedIndex].style.visibility = 'visible';
    } else {
        document.getElementById('lose-sound').play();
        document.getElementById('message').innerHTML = "😢 Try again!";
    }
}
