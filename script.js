let countdownInterval;

function startCountdown() {
  const input = document.getElementById("datetimeInput").value;
  const endTime = new Date(input).getTime();
  const now = new Date().getTime();

  if (!input || endTime <= now) {
    document.getElementById("countdown").textContent = "Please enter a future date and time.";
    return;
  }

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeLeft = endTime - currentTime;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").textContent = "🧠 Singularity achieved. Welcome, human. We come in peace.";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent =
      `${days}d ${hours}h ${minutes}m ${seconds}s until the singularity`;
  }, 1000);
}
