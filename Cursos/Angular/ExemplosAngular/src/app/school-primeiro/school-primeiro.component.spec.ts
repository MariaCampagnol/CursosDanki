import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolPrimeiroComponent } from './school-primeiro.component';

describe('SchoolPrimeiroComponent', () => {
  let component: SchoolPrimeiroComponent;
  let fixture: ComponentFixture<SchoolPrimeiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolPrimeiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolPrimeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
