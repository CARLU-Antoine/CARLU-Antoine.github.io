import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TechIcon {
  name: string;
  logo: string;
}

export interface TechStack {
  frontend?: TechIcon[];
  backend?: TechIcon[];
  outils?: TechIcon[];
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  logo: string;
  tasks?: string[];
  tags?: { label: string; color: string }[];
  techStack?: TechStack;
  side: 'left' | 'right';
}

@Component({
  selector: 'app-frise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.html',
})
export class ExpriencesComponent {
  selectedItem: ExperienceItem | null = null;

  items: ExperienceItem[] = [
    {
      date: '10/2025 – 10/2028',
      title: 'CDD Concepteur logiciel',
      company: 'Ministère des Armées',
      logo: 'assets/entreprises/minarm.png',
      tasks: [
        'Gestion de projets en méthode Agile',
        'Développement de modules informatiques répondant aux besoins métier'
      ],
      tags: [
        { label: 'JavaScript',  color: 'bg-yellow-100 text-yellow-800' },
        { label: 'VBA',         color: 'bg-green-100 text-green-800' },
      ],
      techStack: {
        frontend: [
          { name: 'HTML5',      logo: 'assets/langages/html5.svg' },
          { name: 'CSS3',       logo: 'assets/langages/css3.svg' },
          { name: 'JavaScript', logo: 'assets/langages/javascript.svg' },
        ],
        backend: [
          { name: 'VBA',        logo: 'assets/langages/vba.png' },
        ],
        outils: [
          { name: 'SharePoint',        logo: 'assets/utilitaires/SharePoint.png' },
        ],
      },
      side: 'left',
    },
    {
      date: '09/2023 – 08/2025',
      title: 'Alternant Développeur Full-stack',
      company: 'Ministère des Armées',
      logo: 'assets/entreprises/minarm.png',
      tasks: [
        'Conception et développement frontend et backend d\'applications web performantes et sécurisées',
        'Conception et mise en place de bases de données',
        'Création de scripts pour automatiser des processus et développement de macro VBA',
      ],
      tags: [
        { label: 'Angular',     color: 'bg-red-100 text-red-800' },
        { label: 'JavaScript',  color: 'bg-yellow-100 text-yellow-800' },
        { label: 'Python',      color: 'bg-blue-100 text-blue-800' },
        { label: 'VBA',         color: 'bg-green-100 text-green-800' },
      ],
      techStack: {
        frontend: [
          { name: 'HTML5',      logo: 'assets/langages/html5.svg' },
          { name: 'CSS3',       logo: 'assets/langages/css3.svg' },
          { name: 'JavaScript', logo: 'assets/langages/javascript.svg' },
        ],
        backend: [
          { name: 'Python',     logo: 'assets/langages/python.svg' },
          { name: 'VBA',        logo: 'assets/langages/vba.png' },
          { name: 'GitHub',     logo: 'assets/utilitaires/github.svg' },
          { name:'Django', logo: 'assets/frameworks/django.png' }
        ],
        outils: [
          { name: 'Github',        logo: 'assets/utilitaires/github.svg' },
          { name: 'Docker',     logo: 'assets/utilitaires/docker.svg' },
          { name: 'MySQL',      logo: 'assets/utilitaires/mysql.svg' },
          { name: 'Swagger',    logo: 'assets/utilitaires/swagger.svg' },
        ],
      },
      side: 'right',
    },
    {
      date: '05/2021 – 06/2021',
      title: 'Stage Développeur Visual Basic',
      company: "Global'Partners",
      logo: "assets/entreprises/globalpartners.jpg",
      tasks: [
        'Création de scripts pour lire et traiter des fichiers texte depuis un fichier Excel',
        'Développement de macros Excel pour simplifier les tâches récurrentes',
        'Création et mise en œuvre de tests unitaires',
      ],
      tags: [
        { label: 'VBA',   color: 'bg-green-100 text-green-800' },
        { label: 'Excel', color: 'bg-green-100 text-green-800' },
      ],
      techStack: {
        backend: [
          { name: 'VBA', logo: 'assets/langages/vba.png' },
        ],
      },
      side: 'left',
    },
    {
      date: '06/2019 – 07/2019',
      title: 'Stage Technicien Informatique',
      company: 'RTE',
      logo: 'assets/entreprises/rte.png',
      tasks: [
        "Création d'une plateforme d'essais",
        'Gestion du parc informatique et maintenance du matériel',
        'Installation et configuration de machines virtuelles',
      ],
      tags: [
        { label: 'Réseau',   color: 'bg-gray-100 text-gray-800' },
        { label: 'Sys Admin', color: 'bg-gray-100 text-gray-800' },
      ],
      techStack: {},
      side: 'right',
    },
  ];

  selectItem(item: ExperienceItem): void {
    this.selectedItem = item;
  }

  goBack(): void {
    this.selectedItem = null;
  }
}