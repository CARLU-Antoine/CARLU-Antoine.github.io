import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpriencesComponent } from './experiences';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ExpriencesComponent', () => {
  let component: ExpriencesComponent;
  let fixture: ComponentFixture<ExpriencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpriencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpriencesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
