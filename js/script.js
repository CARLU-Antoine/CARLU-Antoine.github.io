
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

document.addEventListener("DOMContentLoaded", function() {
  const modalButtons = document.querySelectorAll('.modal-btn');
  const modal = document.getElementById('modal');
  const closeButton = document.querySelector('.close-button');
  const modalDetails = document.querySelector('.modal-details');
  const modalTitle = document.querySelector('.modal-title');
  const modalImage = document.querySelector('.modal-image');

  const projectDetails = {
    java: {
      title: "Projet Patient",
      image: "../asset/project/java.png",
      description: [
        "Création d'une classe Sms pour envoyer des sms",
        "Création d'une classe modal afin de permettre à l'utilisateur de modifier son nom et prénom",
        "Création d'une classe sauvegarde afin de sauvegarder les données localement",
        "Utilisation d'une classe ObjectSerialize pour faciliter la sauvegarde",
        "Récupération des contacts internes du patient depuis son téléphone",
        "Requête à l'utilisateur les permissions pour avoir des autorisations d'interagir avec les services du téléphone",
        "Affichage dynamique de la liste des contacts",
        "Création d'un dropdown qui permet de faciliter la sélection du patient"
      ],
      downloadLink: "../asset/projet/Projet-Patient.zip"
    },
    csharp: {
      title: "Projet Tholdi",
      image: "../asset/project/csharp.png",
      description: [
        "Vérification des informations de connexion",
        "IHM qui permet d'ajouter un container",
        "IHM qui permet de réaliser une inspection sur un container",
        "IHM de gestion des containers qui permet de supprimer ou de modifier un container",
        "IHM de gestion des containers qui permet de supprimer ou de modifier une inspection",
        "Création de plusieurs classes afin d'interagir avec les méthodes"
      ],
      downloadLink: "../asset/projet/PPE3.zip"
    },
    htmlcssjs: {
      title: "Projet PDF editor",
      image: "../asset/project/pdf-editor.jpg",
      description: [
        "Application web développée en HTML, CSS et JavaScript",
        "Utilisation de PDF.js pour créer, modifier et annoter un ou plusieurs fichiers PDF directement dans le navigateur",
        "Intégration de Tesseract.js pour extraire un résumé automatique du texte contenu dans les PDF",
        "Fonctionnalité permettant de télécharger les PDF modifiés",
        "Interface utilisateur intuitive et responsive",
        "Gestion dynamique du contenu PDF avec édition en temps réel",
        "Optimisation de la reconnaissance de texte pour un résumé précis"
      ],      
      downloadLink: "../asset/projet/pdf-editor-main.zip"
    },
    htmlcssphp: {
      title: "Projet Container",
      image: "../asset/project/php.jpg",
      description: [
        "Possibilité de créer un compte et de se connecter au site",
        "Liste des tarifs des containers",
        "Création d'une page d'accueil avec les informations de l'entreprise",
        "Possibilité de réserver un ou plusieurs containers dans une seule commande",
        "Capacité à supprimer un conteneur commandé lors de la commande",
        "Génération d'un devis à la fin de la commande",
        "Page de gestion des commandes qui permet de supprimer ou de modifier des containers"
      ],
      downloadLink: "../asset/projet/PPE2.zip"
    },
    javaphp: {
      title: "Projet Medicament",
      image: "../asset/project/java-php.png",
      description: [
        "Possibilité à l'utilisateur de se connecter",
        "IHM permettant d'ajouter un médicament",
        "IHM qui permet de voir la liste des médicaments",
        "IHM qui permet de voir les paramètres du compte connecté",
        "Création de fichiers PHP afin d'interagir avec la base de données"
      ],
      downloadLink: "../asset/projet/Medicament.zip"
    },
    angular: {
      title: "Projet Angular / Ionic",
      image: "../asset/project/angular-ionic.png",
      description: [
        "Page liste des produits",
        "Gestion du panier",
        "Page liste des bateaux",
        "Page liste des restaurants",
        "Page liste des recettes",
        "Gestion des données des pages statiques : JSON",
        "Gestion des données du panier : LocalStorage"
      ],
      downloadLink: "../asset/projet/Angular-Ionic.zip"
    }
  };

  modalButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = button.classList[1] ? button.classList[1].split('-')[2] : null;
      const project = projectDetails[filter];
      

      if (project) {
        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalDetails.innerHTML = project.description.map(item => `<p>${item}</p>`).join('');
        modalDetails.innerHTML += `<a href="${project.downloadLink}" class="buttonDownload">Télécharger</a>`;
        
        modal.classList.add('show'); // Ajoute la classe show pour l'affichage
        modal.classList.remove('fade-out'); // Supprime fade-out si présent
      } else {
        modalDetails.textContent = "Détails non disponibles.";
      }
    });
  });

  closeButton.addEventListener('click', function() {
    closeModal();
});

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.add('fade-out'); // Ajoute la classe fade-out pour l'effet de disparition
        modal.addEventListener('transitionend', function() {
            modal.classList.remove('show'); // Cache complètement la modale
            modalDetails.innerHTML = ""; // Réinitialiser le contenu
        }, { once: true });
    }


  // Fonctionnalité de filtrage
  const buttons = document.querySelectorAll('.btn-filter');
  const projects = document.querySelectorAll('.container-projets');

  buttons.forEach(button => {
    button.addEventListener('click', () => {

      buttons.forEach(btn => btn.classList.remove('active'));
      
      button.classList.add('active');

      

      const filter = button.getAttribute('data-filter');

      // Afficher toutes les cartes si "all" est cliqué
      if (filter === "all") {
        projects.forEach(project => {
          project.classList.remove('hidden');
        });
      } else {
        projects.forEach(project => {
          // Vérifier si le data-lang de la carte correspond au filtre
          if (project.getAttribute('data-lang') === filter) {
            project.classList.remove('hidden');
          } else {
            project.classList.add('hidden');
          }
        });
      }
    });
  });
});
