
// définir le texte à écrire
const text = "étudiant en Architecte informatique option logiciel";
// Initialise le compteur de lettres à zéro
let compteurLettre = 0;

// récupérer l'élément HTML où le texte sera affiché
const textePresentation = document.getElementById("texte-presentation");

const sectionCV = document.querySelector(".section-CV");
const sectionLangages = document.querySelector(".section-langages");
const sectionProjets = document.querySelector(".section-projets");


const modalContainerJava = document.querySelector(".modal-container-java");
const modalTriggersJava = document.querySelectorAll(".modal-trigger-java");

const modalContainerCsharp = document.querySelector(".modal-container-csharp");
const modalTriggersCsharp = document.querySelectorAll(".modal-trigger-csharp");

const modalContainerPhp = document.querySelector(".modal-container-php");
const modalTriggersPhp = document.querySelectorAll(".modal-trigger-php");

const modalContainerMedicament = document.querySelector(".modal-container-medicament");
const modalTriggersMedicament = document.querySelectorAll(".modal-trigger-medicament");

const modalContainerAngular = document.querySelector(".modal-container-angular");
const modalTriggersAngular= document.querySelectorAll(".modal-trigger-angular");



modalTriggersJava.forEach(trigger => trigger.addEventListener("click", montrerModalJava))
modalTriggersCsharp.forEach(trigger => trigger.addEventListener("click", montrerModalCsharp))
modalTriggersPhp.forEach(trigger => trigger.addEventListener("click", montrerModalPhp))
modalTriggersMedicament.forEach(trigger => trigger.addEventListener("click", montrerModalMedicament))
modalTriggersAngular.forEach(trigger => trigger.addEventListener("click", montrerModalAngular))

function montrerModalJava(){
  modalContainerJava.classList.toggle("active-java")
}

function montrerModalCsharp(){
  modalContainerCsharp.classList.toggle("active-csharp")
}

function montrerModalPhp(){
  modalContainerPhp.classList.toggle("active-php")
}

function montrerModalMedicament(){
  modalContainerMedicament.classList.toggle("active-medicament")
}
function montrerModalAngular(){
  modalTriggersAngular.classList.toggle("active-angular")
}

// définir la fonction qui écrit le texte
function ecrireTexte() {
  if (compteurLettre < text.length) {
    textePresentation.innerHTML += text.charAt(compteurLettre);
    compteurLettre++;
    setTimeout(ecrireTexte, 100);
  } else {
    setTimeout(supprimerTexte, 2000);
  }
}

// définir la fonction qui efface le texte
function supprimerTexte() {
  if (compteurLettre > 0) {
    textePresentation.innerHTML = textePresentation.innerHTML.slice(0, -1);
    compteurLettre--;
    setTimeout(supprimerTexte, 100);
  } else {
    setTimeout(ecrireTexte, 2000);
  }
}

// déclencher la boucle d'écriture et d'effacement
ecrireTexte();


// Définir les propriétés de transition
sectionCV.style.transition = "opacity 1s ease-in-out";

// Masquer l'élément en définissant l'opacité sur 0
sectionCV.style.opacity = 0;


window.addEventListener("scroll", () => {
  // Vérifie si l'élément est visible dans la fenêtre
  if (sectionCV.getBoundingClientRect().top < window.innerHeight) {
    // Afficher l'élément en définissant l'opacité sur 1
    sectionCV.style.opacity = 1;
  }
});


// Définir les propriétés de transition
sectionLangages.style.transition = "opacity 1s ease-in-out";

// Masquer l'élément en définissant l'opacité sur 0
sectionLangages.style.opacity = 0;


window.addEventListener("scroll", () => {
  // Vérifie si l'élément est visible dans la fenêtre
  if (sectionLangages.getBoundingClientRect().top < window.innerHeight) {
    // Afficher l'élément en définissant l'opacité sur 1
    sectionLangages.style.opacity = 1;
  }
});



// Définir les propriétés de transition
sectionProjets.style.transition = "opacity 1s ease-in-out";

// Masquer l'élément en définissant l'opacité sur 0
sectionProjets.style.opacity = 0;


window.addEventListener("scroll", () => {
  // Vérifie si l'élément est visible dans la fenêtre
  if (sectionProjets.getBoundingClientRect().top < window.innerHeight) {
    // Afficher l'élément en définissant l'opacité sur 1
    sectionProjets.style.opacity = 1;
  }
});