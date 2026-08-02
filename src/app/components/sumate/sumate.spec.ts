import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sumate } from './sumate';

describe('Sumate', () => {
  let component: Sumate;
  let fixture: ComponentFixture<Sumate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sumate],
    }).compileComponents();

    fixture = TestBed.createComponent(Sumate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
