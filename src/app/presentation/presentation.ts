import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentation.html',
  styleUrls: ['./presentation.css'],
})
export class PresentationComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private interval: any;

  formations = [
    { id: 1, title: 'CFA Insta', image: 'assets/formations/cfa-insta.png' },
    { id: 2, title: 'IUT de Lille', image: 'assets/formations/iut-de-lille.webp' },
    { id: 3, title: 'Lycée Jules Ferry', image: 'assets/formations/lycee-jules-ferry.jpg' },
    { id: 4, title: 'La Tournelle', image: 'assets/formations/la-tournelle.jpg' },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.formations.length;
      this.cdr.detectChanges();
    }, 3000);
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.cdr.detectChanges();
    this.startAutoSlide();
  }

  prev() {
    this.goToSlide((this.currentSlide - 1 + this.formations.length) % this.formations.length);
  }

  next() {
    this.goToSlide((this.currentSlide + 1) % this.formations.length);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}