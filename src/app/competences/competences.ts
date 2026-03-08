import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competences.html',
  styleUrls: ['./competences.css'],
})
export class CompetencesComponent {
  activeTab = 'tout';

  categories = [
    { id: 'tout', label: 'Tout' },
    { id: 'langages', label: 'Langages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'utilitaires', label: 'Utilitaires' },
  ];

  competences = [
    { nom: 'JavaScript', image: 'assets/langages/javascript.svg', lien: 'https://www.javascript.com/', categorie: 'langages' },
 { nom: 'Python', image: 'assets/langages/python.svg', lien: 'https://www.python.org/', categorie: 'langages' },
    { nom: 'Bash', image: 'assets/langages/bash.png', lien: 'https://www.gnu.org/software/bash/', categorie: 'langages' },
    { nom: 'VBA', image: 'assets/langages/vba.png', lien: 'https://learn.microsoft.com/fr-fr/office/vba/', categorie: 'langages' },
    { nom: 'C#', image: 'assets/langages/csharp.svg', lien: 'https://docs.microsoft.com/en-us/dotnet/csharp/', categorie: 'langages' },
    { nom: 'Java', image: 'assets/langages/java.svg', lien: 'https://www.oracle.com/java/', categorie: 'langages' },
    { nom: 'Django', image: 'assets/frameworks/django.png', lien: 'https://www.djangoproject.com/', categorie: 'frameworks' },
    { nom: '.NET', image: 'assets/frameworks/dotnet.svg', lien: 'https://dotnet.microsoft.com/fr-fr/', categorie: 'frameworks' },
    { nom: 'Symfony', image: 'assets/frameworks/symfony.svg', lien: 'https://symfony.com', categorie: 'frameworks' },
    { nom: 'React', image: 'assets/frameworks/react.svg', lien: 'https://reactjs.org/', categorie: 'frameworks' },
    { nom: 'Vue.js', image: 'assets/frameworks/vuejs.svg', lien: 'https://vuejs.org/', categorie: 'frameworks' },
    { nom: 'Bootstrap', image: 'assets/frameworks/bootstrap.svg', lien: 'https://getbootstrap.com/', categorie: 'frameworks' },
    { nom: 'GitHub', image: 'assets/utilitaires/github.svg', lien: 'https://www.github.com/CARLU-Antoine', categorie: 'utilitaires' },
    { nom: 'Docker', image: 'assets/utilitaires/docker.svg', lien: 'https://docs.docker.com', categorie: 'utilitaires' },
    { nom: 'MySQL', image: 'assets/utilitaires/mysql.svg', lien: 'https://www.mysql.com/', categorie: 'utilitaires' },
    { nom: 'Swagger', image: 'assets/utilitaires/swagger.svg', lien: 'https://swagger.io', categorie: 'utilitaires' },
  ];

  getByCategorie(categorie: string) {
    return this.competences.filter(c => c.categorie === categorie);
  }
}