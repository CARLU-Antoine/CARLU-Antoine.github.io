import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesComponent } from './competences';
import { describe,beforeEach,it,expect } from 'vitest';

describe('CompetencesComponent', () => {
  let component: CompetencesComponent;
  let fixture: ComponentFixture<CompetencesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompetencesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
