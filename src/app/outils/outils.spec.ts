import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutilsComponent } from './outils';
import { describe,beforeEach,it,expect } from 'vitest';

describe('OutilsComponent', () => {
  let component: OutilsComponent;
  let fixture: ComponentFixture<OutilsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutilsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OutilsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
