var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

// ----------typing text-----------


const lines = [
    "Web Developer | HTML, CSS, JavaScript Expert",
    "Responsive Web Design",
    "React, Next.js, TailwindCSS",
    "API handling and data fetching",
    "Git, GitHub | Netlify (Deployment)",
    "Always learning new stuff 📚"
  ];
  
  let lineIndex = 0;
  let charIndex = 0;
  const speed = 50;
  const typingDiv = document.getElementById("typeText");
  
  function typeLine() {
    const currentLine = lines[lineIndex];
    if (charIndex < currentLine.length) {
      typingDiv.textContent += currentLine.charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, speed);
    } else {
      setTimeout(() => {
        eraseLine();
      }, 1000);
    }
  }
  
  function eraseLine() {
    if (charIndex > 0) {
      typingDiv.textContent = typingDiv.textContent.slice(0, -1);
      charIndex--;
      setTimeout(eraseLine, 25);
    } else {
      lineIndex = (lineIndex + 1) % lines.length;
      setTimeout(typeLine, 500);
    }
  }
  
  typeLine();
  


// ---------------sidemenu----------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Auto-close menu on any nav link click
const menuLinks = document.querySelectorAll("#sidemenu a");
menuLinks.forEach(link => {
    link.addEventListener("click", closemenu);
});


//   ------------ User message section -------------
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxAhOHk32GLD7AcZHWvcL5g7JG2NnkY1_a30k2poBarTJejBvWdKQbJgvKU_r1PBbwpBw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
