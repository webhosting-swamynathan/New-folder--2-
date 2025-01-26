const downloadBtn = document.querySelector(".download-btn");

// Google Drive file link
const fileLink = "https://drive.google.com/file/d/1yh_IWo2agSikUrOoHu9AiQz7TB5Kzwkj/view?usp=drive_link";

const initTimer = () => {
    if (downloadBtn.classList.contains("disable-timer")) {
        // Redirect to the file link immediately if timer is disabled
        return (window.location.href = fileLink);
    }

    let timer = parseInt(downloadBtn.dataset.timer); // Ensure the timer is treated as a number
    if (isNaN(timer) || timer <= 0) {
        timer = 5; // Default timer value if not set or invalid
    }

    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Your file will download in ${timer} seconds`;

    const initCounter = setInterval(() => {
        if (timer > 0) {
            timer--;
            downloadBtn.innerHTML = `Your file will download in ${timer} seconds`;
        } else {
            clearInterval(initCounter);
            window.location.href = fileLink;
            downloadBtn.textContent = "Your file is downloading...";

            setTimeout(() => {
                downloadBtn.classList.replace("timer", "disable-timer");
                downloadBtn.innerHTML = `<span class="text">Download Again</span>`;
            }, 3000);
        }
    }, 1000);
};

downloadBtn.addEventListener("click", initTimer);


// send mail 

