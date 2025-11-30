const containerAllCarteProjets = document.querySelector(".carte-all-project");


const projectsByLanguage = {
  symfonyreact: [
    {
      title: "Projet Stats GitHub",
      technologies: [
        { name: "Symfony", color: "#FF6F61" },
        { name: "React", color: "#61DAFB" },
        { name: "API GitHub", color: "#24292F" }
      ],
      images: [
        { src: "asset/project/stats-github/connexion.png", title: "Page de connexion" },
        { src: "asset/project/stats-github/liste-projet.png", title: "Liste des projets" },
        { src: "asset/project/stats-github/dashboard.png", title: "Dashboard" },
        { src: "asset/project/stats-github/filtrer-par-projet.png", title: "Filtrage des projets via lineChart" }
      ],
      description: "Application web moderne avec Symfony et React permettant de visualiser les statistiques GitHub (vues, clones, dépôts) grâce à des graphiques interactifs.",
      projetLink: "https://github.com/CARLU-Antoine/Stats-github"
    }
  ],
  dotnet: [
    {
      title: "Projet EmailReaderBackend",
      images: [
        { src: "asset/project/csharp.png", title: "Interface principale" }
      ],
      technologies: [
        { name: "C#", color: "#68217A" },
        { name: "Microsoft Graph API", color: "#0078D4" },
        { name: "MSAL", color: "#FFB900" }
      ],
      description: `EmailReaderBackend est une application backend développée en C# utilisant Microsoft Graph API pour récupérer les emails d'un compte utilisateur Microsoft. 
        Ce projet permet de s'authentifier via OAuth2.0 et de récupérer tous les emails d'une boîte de réception sans limite de 1000 emails.`,
      projetLink: "https://github.com/CARLU-Antoine/EmailReaderBackend"
    }
  ],
    react: [
    {
      title: "Projet 3D-personnalisation",
      images: [
        { src: "asset/frameworks/react.svg", title: "Technologie" },
        { src: "asset/project/3D-personnalisation/application.png", title: "Vue de l'application" }
      ],
      technologies: [
        { name: "React", color: "#61DAFB" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Vite", color: "#646CFF" },
        { name: "Three.js", color: "#000000" }
      ],
      description: `Projet 3D-personnalisation est une application permettant d'avoir une vue d'un modèle 3D en partant d'un fichier avec l'extension .glb permettant de modifier la couleur d'une partie du modèle.`,
      projetLink: "https://github.com/CARLU-Antoine/3D-personnalisation"
    }
  ],
  java: [
    {
      title: "Projet Patient",
      images: [
        { src: "asset/project/java.png", title: "Interface principale" }
      ],
      technologies: [
        { name: "Java", color: "#f89820" },
        { name: "PHP", color: "#777BB4" },
        { name: "MySQL", color: "#4479A1" }
      ],
      description: "Application Java de gestion des patients, avec interface pour envoyer des SMS, modifier les informations et gérer les contacts internes.",
      projetLink: "https://github.com/CARLU-Antoine/Projet-Patient"
    }
  ],
  csharp: [
    {
      title: "Projet Tholdi",
      images: [
        { src: "asset/project/csharp.png", title: "Gestion des containers" }
      ],
      technologies: [
        { name: "C#", color: "#68217A" },
        { name: "PHP", color: "#777BB4" },
        { name: "MySQL", color: "#4479A1" }
      ],
      description: "Application C# pour la gestion des containers et des inspections avec interfaces interactives et vérification des informations.",
      projetLink: "https://github.com/CARLU-Antoine/PPE3"
    }
  ],
  htmlcssjs: [
    {
      title: "Projet PDF editor",
      images: [
        { src: "asset/project/pdf-editor.jpg", title: "Éditeur PDF" }
      ],
      technologies: [
        { name: "HTML", color: "#E34F26" },
        { name: "CSS", color: "#1572B6" },
        { name: "JavaScript", color: "#F7DF1E" }
      ],
      description: "Éditeur PDF en ligne développé avec HTML, CSS et JavaScript, permettant de créer, modifier et annoter des fichiers PDF directement dans le navigateur.",
      projetLink: "https://github.com/CARLU-Antoine/pdf-editor"
    }
  ],
  htmlcssphp: [
    {
      title: "Projet Container",
      images: [
        { src: "asset/project/php.jpg", title: "Interface de réservation" }
      ],
      technologies: [
        { name: "HTML", color: "#E34F26" },
        { name: "CSS", color: "#1572B6" },
        { name: "PHP", color: "#777BB4" },
        { name: "MySQL", color: "#4479A1" }
      ],
      description: "Application web en PHP pour gérer la réservation, la facturation et la gestion des containers, avec création de compte et interface client.",
      projetLink: "https://github.com/CARLU-Antoine/PPE2"
    }
  ],
  javaphp: [
    {
      title: "Projet Medicament",
      images: [
        { src: "asset/project/java-php.png", title: "Gestion des médicaments" }
      ],
      technologies: [
        { name: "Java", color: "#f89820" },
        { name: "PHP", color: "#777BB4" },
        { name: "MySQL", color: "#4479A1" }
      ],
      description: "Application Java/PHP pour la gestion des médicaments, avec interface pour ajouter, consulter et modifier les informations des médicaments.",
      projetLink: "https://github.com/CARLU-Antoine/Medicament"
    }
  ],
  angular: [
    {
      title: "Projet Angular / Ionic",
      images: [
        { src: "asset/project/angular-ionic.png", title: "Interface mobile" }
      ],
      technologies: [
        { name: "Angular", color: "#DD0031" },
        { name: "Ionic", color: "#3781C2" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "JSON", color: "#292929" },
        { name: "LocalStorage", color: "#FF9900" }
      ],
      description: "Application mobile Angular/Ionic pour la gestion de produits, panier et listes diverses, avec données stockées localement via JSON et LocalStorage.",
      projetLink: "https://github.com/CARLU-Antoine/RecetteVaultFront"
    }
  ]
};

let sliderIndex = 0;
let currentSlides = {};

// Génération dynamique des cartes projets
for (const language in projectsByLanguage) {
  if (projectsByLanguage.hasOwnProperty(language)) {
    const projects = projectsByLanguage[language];

    projects.forEach(project => {
      const container = document.createElement('div');
      container.className = 'container-projets';
      container.setAttribute('data-lang', language);

      const card = document.createElement('div');
      card.className = 'projet-carte';

      // Slider
      const sliderContainer = document.createElement('div');
      sliderContainer.className = 'slider-container';
      sliderContainer.dataset.sliderId = sliderIndex;
      currentSlides[sliderIndex] = 0;

      const sliderWrapper = document.createElement('div');
      sliderWrapper.className = 'slider-wrapper';

      project.images.forEach((photo, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide' + (index === 0 ? ' active' : '');

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.title;
        img.onerror = function() {
          this.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop';
        };

        const slideContent = document.createElement('div');
        slideContent.className = 'slide-content';
        const slideTitle = document.createElement('h1');
        slideTitle.textContent = photo.title;
        slideContent.appendChild(slideTitle);

        slide.appendChild(img);
        slide.appendChild(slideContent);
        sliderWrapper.appendChild(slide);
      });

      sliderContainer.appendChild(sliderWrapper);

      // Flèches, dots et fullscreen
      if (project.images.length > 1) {
        const prevArrow = document.createElement('div');
        prevArrow.className = 'arrow arrow-left';
        prevArrow.innerHTML = '‹';
        const nextArrow = document.createElement('div');
        nextArrow.className = 'arrow arrow-right';
        nextArrow.innerHTML = '›';

        const fullScreenBtn = document.createElement('div');
        fullScreenBtn.className = 'btn-fullscreen-slider';
        fullScreenBtn.innerHTML = '⤢';

        sliderContainer.appendChild(fullScreenBtn);

        fullScreenBtn.onclick = () => {
          const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
          if (!document.fullscreenElement) {
              sliderContainer.requestFullscreen().catch(err => console.error(err));
              sliderWrapper.classList.add('fullscreen-active');
              sliderWrapper.style.height = '100vh';
          } else {
              document.exitFullscreen();
              sliderWrapper.classList.remove('fullscreen-active');
              sliderWrapper.style.height = '500px';
          }
        };

        document.addEventListener('fullscreenchange', () => {
          const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
          if (!document.fullscreenElement) {
            sliderWrapper.classList.remove('fullscreen-active');
            sliderWrapper.style.height = '500px';
          }
        });

        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'dots';

        project.images.forEach((_, index) => {
          const dot = document.createElement('div');
          dot.className = 'dot' + (index === 0 ? ' active' : '');
          dot.dataset.sliderId = sliderIndex;
          dot.dataset.slideIndex = index;
          dot.onclick = function() { goToSlide(parseInt(this.dataset.sliderId), parseInt(this.dataset.slideIndex)); };
          dotsContainer.appendChild(dot);
        });

        prevArrow.dataset.sliderId = sliderIndex;
        nextArrow.dataset.sliderId = sliderIndex;
        prevArrow.onclick = function() { changeSlide(parseInt(this.dataset.sliderId), -1); };
        nextArrow.onclick = function() { changeSlide(parseInt(this.dataset.sliderId), 1); };

        sliderContainer.appendChild(prevArrow);
        sliderContainer.appendChild(nextArrow);
        sliderContainer.appendChild(dotsContainer);
      }

      const title = document.createElement('h4');
      title.className = 'projet-titre';
      title.innerHTML = `<b>${project.title}</b>`;

      const descContainer = document.createElement('div');
      descContainer.className = 'projet-description';
      const p = document.createElement('p');
      p.textContent = project.description;
      descContainer.appendChild(p);

      card.appendChild(sliderContainer);
      card.appendChild(title);

      // Technologies avec couleur
      if (project.technologies && project.technologies.length > 0) {
        const containerTechnologies = document.createElement('div');
        containerTechnologies.className = 'projets-technologies-container';

        project.technologies.forEach(tech => {
          const spanTechnologie = document.createElement('span');
          spanTechnologie.className = 'projet-technologie';
          spanTechnologie.textContent = tech.name;
          if (tech.color) {
            spanTechnologie.style.backgroundColor = tech.color;
          }
          containerTechnologies.appendChild(spanTechnologie);
        });
        card.appendChild(containerTechnologies);
      }

      card.appendChild(descContainer);

      const projetBtn = document.createElement('button');
      projetBtn.className = 'projet-btn';
      projetBtn.textContent = 'Voir le projet';
      projetBtn.onclick = function() { window.open(project.projetLink, '_blank'); };
      card.appendChild(projetBtn);

      container.appendChild(card);
      containerAllCarteProjets.appendChild(container);

      sliderIndex++;
    });
  }
}

function changeSlide(sliderId, direction) {
  const sliderContainer = document.querySelector(`[data-slider-id="${sliderId}"]`);
  if (!sliderContainer) return;
  const slides = sliderContainer.querySelectorAll('.slide');
  const dots = sliderContainer.querySelectorAll('.dot');
  slides[currentSlides[sliderId]].classList.remove('active');
  if (dots.length > 0) dots[currentSlides[sliderId]].classList.remove('active');
  currentSlides[sliderId] = (currentSlides[sliderId] + direction + slides.length) % slides.length;
  const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
  sliderWrapper.style.transform = `translateX(-${currentSlides[sliderId]*100}%)`;
  slides[currentSlides[sliderId]].classList.add('active');
  if (dots.length > 0) dots[currentSlides[sliderId]].classList.add('active');
}

function goToSlide(sliderId, index) {
  const sliderContainer = document.querySelector(`[data-slider-id="${sliderId}"]`);
  if (!sliderContainer) return;
  const slides = sliderContainer.querySelectorAll('.slide');
  const dots = sliderContainer.querySelectorAll('.dot');
  slides[currentSlides[sliderId]].classList.remove('active');
  if (dots.length > 0) dots[currentSlides[sliderId]].classList.remove('active');
  currentSlides[sliderId] = index;
  const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
  sliderWrapper.style.transform = `translateX(-${currentSlides[sliderId]*100}%)`;
  slides[currentSlides[sliderId]].classList.add('active');
  if (dots.length > 0) dots[currentSlides[sliderId]].classList.add('active');
}

window.changeSlide = changeSlide;
window.goToSlide = goToSlide;

// Filtrage
const buttons = document.querySelectorAll('.btn-filter');
const projects = document.querySelectorAll('.container-projets');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');
    if (filter === "all") {
      projects.forEach(project => project.classList.remove('hidden'));
    } else {
      projects.forEach(project => {
        if (project.getAttribute('data-lang') === filter) project.classList.remove('hidden');
        else project.classList.add('hidden');
      });
    }
  });
});

// Navigation clavier
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    const visibleSlider = document.querySelector('.container-projets:not(.hidden) .slider-container');
    if (!visibleSlider) return;
    const sliderId = parseInt(visibleSlider.dataset.sliderId);
    if (event.key === 'ArrowLeft') changeSlide(sliderId, -1);
    else changeSlide(sliderId, 1);
  }
});
