const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* ---------------------------
   NO BUTTON BEHAVIOR
---------------------------- */

let scale = 1; // starting size

function moveAndShrinkButton() {
    // Shrink effect
    if (scale > 0.4) {   // stop shrinking too much
        scale -= 0.1;
        noBtn.style.transform = "scale(" + scale + ")";
    }

    // Move randomly
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Desktop hover
noBtn.addEventListener("mouseover", moveAndShrinkButton);

// Mobile touch
noBtn.addEventListener("touchstart", moveAndShrinkButton);

// If somehow clicked
noBtn.addEventListener("click", moveAndShrinkButton);


/* ---------------------------
   YES BUTTON CLICK
---------------------------- */

yesBtn.addEventListener("click", () => {

    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background: linear-gradient(to right, #ff758c, #ff7eb3);
            color:white;
            font-family:Arial, sans-serif;
            text-align:center;
        ">
            <h1 style="margin-bottom:20px;">
                You just made me the happiest guy alive 🥰❤️
            </h1>

            <p style="margin-bottom:30px;">
                Sending your answer to WhatsApp...
            </p>

            <div style="
                width:250px;
                height:12px;
                background:rgba(255,255,255,0.3);
                border-radius:20px;
                overflow:hidden;
            ">
                <div id="progressBar" style="
                    height:100%;
                    width:0%;
                    background:white;
                    border-radius:20px;
                    transition: width 0.1s linear;
                "></div>
            </div>
        </div>
    `;

    const phoneNumber = "254714895094"; // your number (no +)
    const message = "Yesss 🥰 I will be your Valentine ❤️";

    const progress = document.getElementById("progressBar");
    let width = 0;

    const interval = setInterval(() => {
        width++;
        progress.style.width = width + "%";

        if (width >= 100) {
            clearInterval(interval);
            window.location.href =
                "https://api.whatsapp.com/send?phone=" + phoneNumber +
                "&text=" + encodeURIComponent(message);
        }
    }, 20);
});
