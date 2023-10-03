
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

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxryImKR27PnkWm8ouPa0Zo3jbYrzIF225O1E8MsNzHQmODMKeh5Y7kwtZ4n5LyMUmDrQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

const scrollToTopButton = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
} else {
    scrollToTopButton.style.display = 'none';
}
});
scrollToTopButton.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typing animation

const headerText = document.getElementById('typing-text');
const texts = ["Frontend Developer", "Content Creator"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].length) {
        headerText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 50);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        const text = texts[textIndex];
        headerText.textContent = text.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 30);
    } else {
        textIndex++;
        if (textIndex >= texts.length) {
            textIndex = 0;
        }
        setTimeout(type, 2000);
    }
}
setTimeout(type, 2000);
