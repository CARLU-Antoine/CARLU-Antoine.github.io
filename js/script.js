
// définir le texte à écrire
const text = "étudiant en architecte des systèmes d'information";
// Initialise le compteur de lettres à zéro
let compteurLettre = 0;

// récupérer l'élément HTML où le texte sera affiché
const textePresentation = document.getElementById("texte-presentation");


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
