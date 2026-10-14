
/* =========================================================
   TYPING ANIMATION
========================================================= */

const lines = [
    "Full Stack MERN Developer",
    "React • Node.js • Express.js • MongoDB",
    "Building modern and responsive web applications",
    "REST APIs • Authentication • Database Integration",
    "Turning real-world ideas into working applications",
    "Always learning. Always building. 🚀"
];

let lineIndex = 0;
let charIndex = 0;

const typingSpeed = 55;
const eraseSpeed = 30;
const pauseAfterTyping = 1400;
const pauseBeforeTyping = 500;

const typingDiv = document.getElementById("typeText");


function typeLine() {
    if (!typingDiv) {
        return;
    }

    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
        typingDiv.textContent +=
            currentLine.charAt(charIndex);

        charIndex++;

        setTimeout(typeLine, typingSpeed);
    } else {
        setTimeout(eraseLine, pauseAfterTyping);
    }
}


function eraseLine() {
    if (!typingDiv) {
        return;
    }

    if (charIndex > 0) {
        typingDiv.textContent =
            typingDiv.textContent.slice(0, -1);

        charIndex--;

        setTimeout(eraseLine, eraseSpeed);
    } else {
        lineIndex = (lineIndex + 1) % lines.length;

        setTimeout(typeLine, pauseBeforeTyping);
    }
}


// Start typing animation.

if (typingDiv) {
    typeLine();
}


/* =========================================================
   MOBILE SIDE MENU
========================================================= */

const sidemenu = document.getElementById("sidemenu");


function openmenu() {
    if (!sidemenu) {
        return;
    }

    sidemenu.style.right = "0";
}


function closemenu() {
    if (!sidemenu) {
        return;
    }

    sidemenu.style.right = "-240px";
}


/* =========================================================
   CLOSE MOBILE MENU AFTER NAVIGATION
========================================================= */

const menuLinks = document.querySelectorAll("#sidemenu a");


menuLinks.forEach(function(link) {
    link.addEventListener("click", closemenu);
});


/* =========================================================
   CONTACT US FORM
   Existing Google Sheets integration preserved.
========================================================= */

const scriptURL =
    "https://script.google.com/macros/s/AKfycbxAhOHk32GLD7AcZHWvcL5g7JG2NnkY1_a30k2poBarTJejBvWdKQbJgvKU_r1PBbwpBw/exec";


const form =
    document.forms["submit-to-google-sheet"];

const msg = document.getElementById("msg");


if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        if (msg) {
            msg.innerHTML = "Sending message...";
        }

        fetch(scriptURL, {
            method: "POST",
            body: new FormData(form)
        })
        .then(function() {
            if (msg) {
                msg.innerHTML =
                    "Message sent successfully ✓";
            }

            form.reset();

            setTimeout(function() {
                if (msg) {
                    msg.innerHTML = "";
                }
            }, 5000);
        })
        .catch(function(error) {
            console.error("Error!", error.message);

            if (msg) {
                msg.innerHTML =
                    "Something went wrong. Please try again.";
            }
        });
    });
}

