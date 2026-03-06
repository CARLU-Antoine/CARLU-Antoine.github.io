import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from '../accueil/accueil';
import { PresentationComponent } from '../presentation/presentation';
import { FriseComponent } from '../frise/frise';
import { OutilsComponent } from '../outils/outils';
import { ProjetsComponent } from '../projets/projets';
import { FooterComponent } from '../footer/footer';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AccueilComponent, PresentationComponent, FriseComponent, OutilsComponent, ProjetsComponent, FooterComponent],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}