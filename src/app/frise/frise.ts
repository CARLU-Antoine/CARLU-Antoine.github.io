import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  logo: string;
  tasks?: string[];
  tags?: { label: string; color: string }[];
  side: 'left' | 'right';
}

@Component({
  selector: 'app-frise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frise.html',
})
export class FriseComponent {
  items: TimelineItem[] = [
    {
      date: '2023',
      title: 'Stage développeur VBA',
      company: 'Mairie de Saint-Maur des Fossés',
      logo: 'assets/entreprises/Saint-Maur-des-Fossés.png',
      tasks: [
        'Recueil du besoin des utilisateurs',
        'Réalisations / modifications de macro VBA',
      ],
      tags: [
        { label: 'Excel', color: 'bg-green-100 text-green-800' },
        { label: 'VBA',   color: 'bg-green-100 text-green-800' },
      ],
      side: 'left',
    },
    {
      date: '2022',
      title: 'Stage développeur frontend',
      company: 'Coachinternet',
      logo: 'assets/entreprises/coachinternet.png',
      tasks: [
        'Développement d\'interfaces utilisateur',
        'Intégration de maquettes responsive',
      ],
      tags: [
        { label: 'HTML/CSS', color: 'bg-blue-100 text-blue-800' },
        { label: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' },
      ],
      side: 'right',
    },
  ];
}