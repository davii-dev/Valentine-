const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Move NO button when hovered (playful)
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// YES button click: show success and redirect to WhatsApp
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="margin-top:150px; text-align:center; color:white; font-family:Arial, sans-serif;">
            <h1>You just made me the happiest guy alive 🥰❤️</h1>
            <p>Redirecting to WhatsApp...</p>
        </div>
    `;

    // Replace with your WhatsApp number (no +, no spaces)
    const phoneNumber = "254714895094";

    // The message that will appear on WhatsApp
    const message = "Yesss 🥰 I will be your Valentine ❤️";

    // Wait 2 seconds for effect, then open WhatsApp link
    setTimeout(() => {
        window.location.href =
            "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    }, 2000);
});
