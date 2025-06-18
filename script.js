let countdownTime = 15 * 60; // 15 minutos en segundos

function startCountdown() {
    let remaining = countdownTime;
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = remaining % 60;

        countdownElement.textContent = 
            `00 : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

        remaining--;

        if (remaining < 0) {
            remaining = countdownTime;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

startCountdown();