// Calculate the date 9 weeks from now
const nineWeeksLater = new Date();
nineWeeksLater.setDate(nineWeeksLater.getDate() + 63); // Add 63 days (9 weeks)

function calculateTimeLeft() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentTime = now.getTime();

    // Calculate the next Thursday at 12:00 AM EST
    let nextThursday = new Date();
    nextThursday.setHours(0, 0, 0, 0); // Set time to 12:00 AM
    nextThursday.setDate(nextThursday.getDate() + ((4 - currentDay + 7) % 7)); // 4 is Thursday

    const timeLeft = nextThursday.getTime() - currentTime;
    return timeLeft;
}

function checkIfSakamotoThursday() {
    const now = new Date();
    const currentDay = now.getDay();

    // If today is Thursday (4), show the "Yes" image, trigger confetti, else show the "No" image
    const headerImage = document.getElementById("header-gif");

    if (currentDay === 4) {
        // It's Thursday - show "Yes" image
        headerImage.src = "https://media1.tenor.com/m/xiwSjevNs1gAAAAd/smile-lu-shaotang.gif"; // Replace with your GIF for Thursday
        document.getElementById("sakamoto-check").innerHTML = "Is it Sakamoto Thursday yet? Yes! Never kill yourself!";
        
        // Trigger School Pride Confetti
        startConfetti();
    } else {
        // It's not Thursday - show "No" image
        headerImage.src = "https://64.media.tumblr.com/56921db8647db48fd21a7ee4caae73d8/41ee50be040f0264-d5/s500x750/a1597c7937124ddcd53178579dffd5178976b17e.gif"; // Replace with your GIF for non-Thursday
        document.getElementById("sakamoto-check").innerHTML = "Is it Sakamoto Thursday yet? No! Fuck my fujo life!";
    }
}

// Function to start School Pride confetti animation
function startConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: [
            '#FF0000', // Red
            '#FF7F00', // Orange
            '#FFFF00', // Yellow
            '#00FF00', // Green
            '#0000FF', // Blue
            '#4B0082', // Indigo
            '#8B00FF'  // Violet
        ], // Rainbow colors for School Pride
    });
}

function updateCountdown() {
    const now = new Date();
    const timeLeft = calculateTimeLeft();

    // If the current time exceeds the 9-week limit, stop the countdown
    if (now >= nineWeeksLater) {
        document.getElementById("countdown").innerHTML = "The cycle has ended!";
        return; // Stop the countdown
    }

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown in a nice format
    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000); 
updateCountdown(); // Initial call to show the timer immediately

// Check if today is Sakamoto Thursday and change the image
checkIfSakamotoThursday();
