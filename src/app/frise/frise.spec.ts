import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriseComponent } from './frise';
import { beforeEach, describe, expect, it } from 'vitest';

describe('FriseComponent', () => {
  let component: FriseComponent;
  let fixture: ComponentFixture<FriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FriseComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
