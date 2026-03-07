import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener, ElementRef, NgZone } from '@angular/core';
import { AccueilComponent } from '../accueil/accueil';
import { PresentationComponent } from '../presentation/presentation';
import { ExpriencesComponent } from '../experiences/experiences';
import { OutilsComponent } from '../outils/outils';
import { ProjetsComponent } from '../projets/projets';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AccueilComponent, PresentationComponent, ExpriencesComponent, OutilsComponent, ProjetsComponent, FooterComponent],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  activeSection: string = 'accueil';
  menuOpen: boolean = false;

  sections = [
    { id: 'accueil',      label: 'Accueil' },
    { id: 'presentation', label: 'Présentation' },
    { id: 'frise',        label: 'Expériences' },
    { id: 'outils',       label: 'Outils' },
    { id: 'projets',      label: 'Projets' },
  ];

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  ngOnInit(): void {
    // Lancement initial
    this.onScroll();
  }

  ngOnDestroy(): void {
    // Le HostListener se nettoie automatiquement
  }

  // ✅ Détecte la section active en fonction du scroll
  @HostListener('window:scroll')
  onScroll(): void {
    const navbarHeight = 64; // hauteur fixe de la navbar en px
    const scrollY = window.scrollY + navbarHeight + 10;

    let current = this.sections[0].id;

    for (const section of this.sections) {
      const el = document.getElementById(section.id);
      if (el && el.offsetTop <= scrollY) {
        current = section.id;
      }
    }

    if (current !== this.activeSection) {
      this.ngZone.run(() => {
        this.activeSection = current;
      });
    }
  }

  scrollTo(sectionId: string, event?: MouseEvent): void {
    event?.stopPropagation();
    this.activeSection = sectionId;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.menuOpen = false;
  }

  toggleMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const dropdown = this.el.nativeElement.querySelector('.dropdown');
    const target = event.target as Node;
    if (!dropdown || dropdown.contains(target)) return;
    this.menuOpen = false;
  }
  toggleTheme(event: Event): void {
    const isDark = (event.target as HTMLInputElement).checked;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }
}