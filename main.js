function newTime() {
    const now = new Date();
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = now.toUTCString();
}

function newDay() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.querySelector('[data-testid="currentDay"]').textContent = days[now.getUTCDay()];
}

newTime();
newDay();

setInterval(newTime, 1000);