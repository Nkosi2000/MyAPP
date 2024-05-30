import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterYourPharmacyPage } from './register-your-pharmacy.page';

describe('RegisterYourPharmacyPage', () => {
  let component: RegisterYourPharmacyPage;
  let fixture: ComponentFixture<RegisterYourPharmacyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterYourPharmacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
