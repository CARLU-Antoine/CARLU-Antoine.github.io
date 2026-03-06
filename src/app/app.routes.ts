import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { AccueilComponent } from './accueil/accueil';
import { PresentationComponent } from './presentation/presentation';

export const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'portfolio', component: PresentationComponent },
  { path: 'about', component: AccueilComponent },
  { path: 'contact', component: AccueilComponent },
];