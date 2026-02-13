const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Function to move NO button
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Desktop hover
noBtn.addEventListener("mouseover", moveButton);

// Mobile touch
noBtn.addEventListener("touchstart", moveButton);

// Extra safety: if she tries clicking it
noBtn.addEventListener("click", moveButton);


// YES button
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="margin-top:150px; text-align:center; color:white; font-family:Arial, sans-serif;">
            <h1>You just made me the happiest guy alive 🥰❤️</h1>
            <p>Redirecting to WhatsApp...</p>
        </div>
    `;

    const phoneNumber = "254714895094";
    const message = "Yesss 🥰 I will be your Valentine ❤️";

    setTimeout(() => {
        window.location.href =
            "https://api.whatsapp.com/send?phone=" + phoneNumber +
            "&text=" + encodeURIComponent(message);
    }, 2000);
});
