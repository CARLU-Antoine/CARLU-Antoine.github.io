import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  images: { src: string; title: string }[];
  technologies: { name: string; color: string }[];
  description: string;
  projetLink: string;
}

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projets.html',
  styleUrls: ['./projets.css'],
})
export class ProjetsComponent {
  activeTab = 'tout';

  categories = [
    { id: 'tout', label: 'Tout' },
    { id: 'react', label: 'React' },
    { id: 'symfonyreact', label: 'Symfony + React' },
    { id: 'dotnet', label: '.NET' },
    { id: 'java', label: 'Java' },
    { id: 'csharp', label: 'C#' },
    { id: 'htmlcssjs', label: 'HTML/CSS/JS' },
    { id: 'htmlcssphp', label: 'HTML/CSS/PHP' },
    { id: 'angular', label: 'Angular' },
  ];

  projectsByLanguage: Record<string, Project[]> = {
    react: [
      {
        title: 'LiteFlow',
        images: [
          { src: 'assets/project/liteFlow/dashboard.png', title: "Vue de l'application" },
          { src: 'assets/project/liteFlow/optimiser-pc.png', title: "Vue de l'application" },
          { src: 'assets/project/liteFlow/nettoyage-pc.png', title: "Vue de l'application" },
          { src: 'assets/project/liteFlow/connexion-vpn.png', title: "Vue de l'application" },
          { src: 'assets/project/liteFlow/informations-pc.png', title: "Vue de l'application" },
          { src: 'assets/project/liteFlow/endpoints.png', title: "Vue de l'application" },
        ],
        technologies: [
          { name: 'React', color: '#61DAFB' },
          { name: 'Node.js', color: '#339933' },
          { name: 'Express', color: '#000000' },
          { name: 'Vite', color: '#646CFF' },
          { name: 'Electron', color: '#47848F' },
        ],
        description: "LiteFlow est une application complète permettant de gérer des flux de données avec une interface web et desktop (Electron).",
        projetLink: 'https://github.com/CARLU-Antoine/LiteFlow',
      },
      {
        title: 'Projet 3D-personnalisation',
        images: [
          { src: 'assets/frameworks/react.svg', title: 'Technologie' },
          { src: 'assets/project/3D-personnalisation/application.png', title: "Vue de l'application" },
        ],
        technologies: [
          { name: 'React', color: '#61DAFB' },
          { name: 'TypeScript', color: '#3178C6' },
          { name: 'Vite', color: '#646CFF' },
          { name: 'Three.js', color: '#000000' },
        ],
        description: "Application permettant d'avoir une vue d'un modèle 3D avec modification de couleur des parties du modèle.",
        projetLink: 'https://github.com/CARLU-Antoine/3D-personnalisation',
      },
    ],
    symfonyreact: [
      {
        title: 'Projet Stats GitHub',
        images: [
          { src: 'assets/project/stats-github/connexion.png', title: 'Page de connexion' },
          { src: 'assets/project/stats-github/liste-projet.png', title: 'Liste des projets' },
          { src: 'assets/project/stats-github/dashboard.png', title: 'Dashboard' },
          { src: 'assets/project/stats-github/filtrer-par-projet.png', title: 'Filtrage des projets' },
        ],
        technologies: [
          { name: 'Symfony', color: '#FF6F61' },
          { name: 'React', color: '#61DAFB' },
          { name: 'API GitHub', color: '#24292F' },
        ],
        description: "Application web avec Symfony et React pour visualiser les statistiques GitHub grâce à des graphiques interactifs.",
        projetLink: 'https://github.com/CARLU-Antoine/Stats-github',
      },
    ],
    dotnet: [
      {
        title: 'Projet EmailReaderBackend',
        images: [{ src: 'assets/project/csharp.png', title: 'Interface principale' }],
        technologies: [
          { name: 'C#', color: '#68217A' },
          { name: 'Microsoft Graph API', color: '#0078D4' },
          { name: 'MSAL', color: '#FFB900' },
        ],
        description: "Backend C# utilisant Microsoft Graph API pour récupérer les emails d'un compte Microsoft via OAuth2.0.",
        projetLink: 'https://github.com/CARLU-Antoine/EmailReaderBackend',
      },
      {
        title: 'Projet Store',
        images: [
          { src: 'assets/project/store/connexion.png', title: 'Interface connexion' },
          { src: 'assets/project/store/creation-produit.png', title: 'Création produit' },
          { src: 'assets/project/store/panier.png', title: 'Panier' },
        ],
        technologies: [
          { name: 'C# dotnet', color: '#68217A' },
          { name: 'Docker', color: '#0078D4' },
          { name: 'Angular', color: '#DD0031' },
          { name: 'TypeScript', color: '#3178C6' },
        ],
        description: "Application de gestion de produits et panier avec C# dotnet backend, Angular frontend, conteneurisée avec Docker.",
        projetLink: 'https://github.com/CARLU-Antoine/Store',
      },
    ],
    java: [
      {
        title: 'Projet Medicament',
        images: [
          { src: 'assets/project/medicament/connexion.png', title: 'Gestion des médicaments' },
          { src: 'assets/project/medicament/ajout-produit.png', title: 'Ajout produit' },
          { src: 'assets/project/medicament/informations.png', title: 'Informations' },
          { src: 'assets/project/medicament/menu.png', title: 'Menu' },
        ],
        technologies: [
          { name: 'Java', color: '#f89820' },
          { name: 'PHP', color: '#777BB4' },
          { name: 'MySQL', color: '#4479A1' },
        ],
        description: "Application Java/PHP pour la gestion des médicaments avec interface pour ajouter, consulter et modifier les informations.",
        projetLink: 'https://github.com/CARLU-Antoine/Medicament',
      },
      {
        title: 'Projet Patient',
        images: [{ src: 'assets/project/java.png', title: 'Interface principale' }],
        technologies: [
          { name: 'Java', color: '#f89820' },
          { name: 'PHP', color: '#777BB4' },
          { name: 'MySQL', color: '#4479A1' },
        ],
        description: "Application Java de gestion des patients avec envoi de SMS, modification des informations et gestion des contacts avec beacons.",
        projetLink: 'https://github.com/CARLU-Antoine/Projet-Patient',
      },
    ],
    csharp: [
      {
        title: 'Projet Tholdi',
        images: [{ src: 'assets/project/csharp.png', title: 'Gestion des containers' }],
        technologies: [
          { name: 'C#', color: '#68217A' },
          { name: 'PHP', color: '#777BB4' },
          { name: 'MySQL', color: '#4479A1' },
        ],
        description: "Application C# pour la gestion des containers et des inspections avec interfaces interactives.",
        projetLink: 'https://github.com/CARLU-Antoine/PPE3',
      },
    ],
    htmlcssjs: [
      {
        title: 'Projet PDF editor',
        images: [
          { src: 'assets/project/pdf-editor/dropzone.png', title: 'Éditeur PDF' },
          { src: 'assets/project/pdf-editor/editeur.png', title: 'Éditeur PDF' },
          { src: 'assets/project/pdf-editor/edition.png', title: 'Éditeur PDF' },
          { src: 'assets/project/pdf-editor/fullscreen.png', title: 'Éditeur PDF' },
        ],
        technologies: [
          { name: 'HTML', color: '#E34F26' },
          { name: 'CSS', color: '#1572B6' },
          { name: 'JavaScript', color: '#F7DF1E' },
        ],
        description: "Éditeur PDF en ligne permettant de créer, modifier et annoter des fichiers PDF directement dans le navigateur.",
        projetLink: 'https://github.com/CARLU-Antoine/pdf-editor',
      },{
        title: 'Ancien Portfolio',
        images: [
          { src: 'assets/project/ancien-portfolio/accueil.png', title: "Accueil" },
          { src: 'assets/project/ancien-portfolio/presentation.png', title: "Présentation de moi" },
          { src: 'assets/project/ancien-portfolio/experiences.png', title: "Mes expériences" },
          { src: 'assets/project/ancien-portfolio/competences.png', title: "Mes compétences" },
          { src: 'assets/project/ancien-portfolio/projets.png', title: "Mes projets" },
        ],
        technologies: [
          { name: 'HTML', color: '#E34F26' },
          { name: 'CSS', color: '#1572B6' },
          { name: 'JavaScript', color: '#F7DF1E' },
        ],
        description: "Mon ancien portfolio présente mes projets, mes compétences et les technologies que j'utilise.",
        projetLink: 'https://github.com/CARLU-Antoine/ancien-portoflio',
      }
    ],
    htmlcssphp: [
      {
        title: 'Projet Container',
        images: [{ src: 'assets/project/php.jpg', title: 'Interface de réservation' }],
        technologies: [
          { name: 'HTML', color: '#E34F26' },
          { name: 'CSS', color: '#1572B6' },
          { name: 'PHP', color: '#777BB4' },
          { name: 'MySQL', color: '#4479A1' },
        ],
        description: "Application PHP pour gérer la réservation, la facturation et la gestion des containers avec création de compte.",
        projetLink: 'https://github.com/CARLU-Antoine/PPE2',
      },
    ],
    angular: [
     {
        title: 'Portfolio',
        images: [
          { src: 'assets/project/nouveau-portfolio/accueil.png', title: "Accueil" },
          { src: 'assets/project/nouveau-portfolio/presentation.png', title: "Présentation de moi" },
          { src: 'assets/project/nouveau-portfolio/experiences.png', title: "Mes expériences" },
          { src: 'assets/project/nouveau-portfolio/preview-experience.png', title: "Détails de l'expérience" },
          { src: 'assets/project/nouveau-portfolio/competences.png', title: "Mes compétences" },
          { src: 'assets/project/nouveau-portfolio/projets.png', title: "Mes projets" },
        ],
        technologies: [
          { name: 'Angular', color: '#DD0031' },
          { name: 'TypeScript', color: '#3178C6' }
        ],
        description: "Mon portfolio présente mes projets, mes compétences et les technologies que j'utilise. Il est développé avec Angular et TypeScript pour une expérience utilisateur fluide et moderne avec daisyui qui est une bibliothèque de composants UI.",
        projetLink: 'https://github.com/CARLU-Antoine/CARLU-Antoine.github.io',
      },
      {
        title: 'Projet Angular / Ionic',
        images: [{ src: 'assets/project/angular-ionic.png', title: 'Interface mobile' }],
        technologies: [
          { name: 'Angular', color: '#DD0031' },
          { name: 'Ionic', color: '#3781C2' },
          { name: 'TypeScript', color: '#3178C6' },
          { name: 'JSON', color: '#292929' },
          { name: 'LocalStorage', color: '#FF9900' },
        ],
        description: "Application mobile Angular/Ionic pour la gestion de produits et panier avec données stockées via LocalStorage.",
        projetLink: 'https://github.com/CARLU-Antoine/RecetteVaultFront',
      },
    ],
  };

  get filtered(): Project[] {
    if (this.activeTab === 'tout') {
      return Object.values(this.projectsByLanguage).flat();
    }
    return this.projectsByLanguage[this.activeTab] || [];
  }

  currentImages: { src: string; title: string }[] = [];
  currentImageIndex = 0;
  modalOpen = false;

  openModal(images: { src: string; title: string }[]) {
    this.currentImages = images;
    this.currentImageIndex = 0;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.currentImages.length) % this.currentImages.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.currentImages.length;
  }
}