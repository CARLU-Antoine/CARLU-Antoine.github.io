import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationComponent } from './presentation';
import { describe,beforeEach,expect,it } from 'vitest';

describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;   
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
