const linkAccueil = document.querySelector('#link-accueil a');
const linkPresentation = document.querySelector('#link-presentation a');
const linkLangages = document.querySelector('#link-langages-programmation a');
const linkProjets = document.querySelector('#link-projets a');

const containerEntete = document.querySelector('.container-entete');
const sectionPresentation = document.querySelector('#section-presentation');
const sectionLangage = document.querySelector('.section-langages');
const sectionProjets = document.querySelector('#section-projets');

function scrollToSection(section) {
  section.scrollIntoView({ behavior: 'smooth' });
}

linkAccueil.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(containerEntete);
});

linkPresentation.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(sectionPresentation);
});

linkLangages.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(sectionLangage);
});

linkProjets.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(sectionProjets);
});
