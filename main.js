// Créer un bouton clic pour afficher/masquer la barre de navigation
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelectorAll(".navlinks li"); // Utiliser querySelectorAll pour tous les <li>

// Écouter l'événement de clic sur le bouton
togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Initialiser Typed.js pour l'animation de texte
var typed = new Typed(".input", {
    strings: ["Frontend Developer", "UX Designer", "Web Developer"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true
});
