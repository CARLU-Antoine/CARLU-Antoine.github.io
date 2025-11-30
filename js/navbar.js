const linkAccueil = document.querySelector('#link-accueil');
const linkPresentation = document.querySelector('#link-presentation');
const linkExperiences = document.querySelector('#link-experiences');
const linkLangages = document.querySelector('#link-langages-programmation');
const linkProjets = document.querySelector('#link-projets');

const containerEntete = document.querySelector('.container-entete');
const sectionPresentation = document.querySelector('#section-presentation');
const containerExperiences = document.querySelector('#container-mes-experiences-professionnelles');
const sectionLangage = document.querySelector('.section-langages');
const sectionProjets = document.querySelector('#section-projets');

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

function setActiveLink(activeLink) {
  document.querySelectorAll('.navbar li').forEach(link => {
    link.classList.remove('active');
  });
  activeLink.classList.add('active');
}


const sections = [
  { element: containerEntete, link: linkAccueil },
  { element: sectionPresentation, link: linkPresentation },
  { element: containerExperiences, link: linkExperiences },
  { element: sectionLangage, link: linkLangages },
  { element: sectionProjets, link: linkProjets }
];



let observer;
let isAutoScrolling = false;

function createObserver() {
  const options = {
    root: null,
    rootMargin: '0px 0px -50% 0px',
    threshold: 0
  };

  observer = new IntersectionObserver((entries) => {
    if (isAutoScrolling) return;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = sections.find(s => s.element === entry.target);
        if (section) {
          setActiveLink(section.link);
        }
      }
    });
  }, options);

  sections.forEach(({ element }) => observer.observe(element));
}

createObserver();


function scrollToSection(section, link) {
  isAutoScrolling = true;
  observer.disconnect();

  section.scrollIntoView({ behavior: 'smooth' });

  setTimeout(() => {
    isAutoScrolling = false;
    setActiveLink(link);
    createObserver();
  }, 100);
}

// Gestion des clics
linkAccueil.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(containerEntete, linkAccueil);
});
linkPresentation.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(sectionPresentation, linkPresentation);
});
linkExperiences.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(containerExperiences, linkExperiences);
});
linkLangages.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(sectionLangage, linkLangages);
});
linkProjets.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(sectionProjets, linkProjets);
});
