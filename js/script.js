const text = "étudiant en architecte des systèmes d'information";
let compteurLettre = 0;
let isDeleting = false;

const textePresentation = document.getElementById("texte-presentation");

function typeEffect() {
  if (!isDeleting) {
    // Écriture
    textePresentation.textContent = text.slice(0, compteurLettre);
    compteurLettre++;

    if (compteurLettre > text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // pause avant suppression
      return;
    }
  } else {
    // Suppression
    textePresentation.textContent = text.slice(0, compteurLettre);
    compteurLettre--;

    if (compteurLettre < 0) {
      isDeleting = false;
      compteurLettre = 0;
    }
  }

  const speed = isDeleting ? 60 : 100; // vitesse différente écriture / suppression
  setTimeout(typeEffect, speed);
}

typeEffect();
