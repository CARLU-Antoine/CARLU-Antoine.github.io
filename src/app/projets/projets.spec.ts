import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsComponent } from './projets';
import { describe,beforeEach,it,expect } from 'vitest';

describe('ProjetsComponent', () => {
  let component: ProjetsComponent;
  let fixture: ComponentFixture<ProjetsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
