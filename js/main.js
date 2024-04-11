
let nameNodes = document.querySelector(`#name`);
let emailNodes = document.querySelector(`#email`);
let subjectsNodes = document.querySelector(`#subjects`);
let messageNodes = document.querySelector(`#message`);
let buttonNode = document.querySelector(`#submit`);
let openNode = document.getElementById('loginForm')

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}
window.onscroll = function() {
    var btnGoToTop = document.getElementById("btnGoToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnGoToTop.style.display = "block";
    } else {
        btnGoToTop.style.display = "none";
    }
}

buttonNode.addEventListener(`click`, function () {
    let allFilled = true;

    if (nameNodes.value === '' && emailNodes.value === '' && subjectsNodes.value === '' && messageNodes.value === '') {
        allFilled = false;
    }

    if (!allFilled) {
        alert(`Заполните форму`);
    } else {
        alert(`Сообщение отправлено`);
    }
});

function changeImage() {
    let imegNode = document.querySelector(`#imeg`)
    if (imegNode.src.match(`./assets/smile.png`)) {
        imegNode.src = `./assets/sm.png`
    } else {
        imegNode.src = `./assets/smile.png`
    }
}

class Particle {
    constructor(x, y, z, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        let blurs = [0, 2, 1, 0];
        this.blur = blurs[z];
        this.speed = z;
        this.color = color;
    }
    
    Move(d) {
        this.y += this.speed * d;
    }
}

let scrollPosition = 0;
const particlesContainer = document.getElementById("particles");
const particles = [
    new Particle(80, 200, 3, "#4d4361"),
    new Particle(200, 400, 1, "#4d4361"),
    new Particle(100, 500, 4, "#4d4361"),
];

Fill();

window.addEventListener("scroll", function(e) {
    Scroll(e);
});

function Scroll(e) {
    let d = 0;
    if (window.pageYOffset > scrollPosition) {
        d = 1;
    } else {
        d = -1;
    }
    scrollPosition = window.pageYOffset;
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].Move(d);
    }
    
    Fill();
}

function Fill() {
    particlesContainer.innerHTML = "";
    
    for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const div = document.createElement("div");
        div.style.position = "fixed";
        div.style.left = particle.x + "px";
        div.style.top = particle.y + "px";
        div.style.filter = blur(`${particle.blur}px`);
        div.style.borderRadius = "50%";
        div.style.backgroundColor = particle.color;
        div.style.zIndex = "1";
        div.style.display = "block";
        div.style.boxShadow = "0 0 10px rgba(0, 0, 0, 3.5)";
        div.style.width = "20px";
        div.style.height = "20px";
        
        particlesContainer.appendChild(div);
    }
}
