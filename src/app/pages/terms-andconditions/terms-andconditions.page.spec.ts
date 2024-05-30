import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermsANDconditionsPage } from './terms-andconditions.page';

describe('TermsANDconditionsPage', () => {
  let component: TermsANDconditionsPage;
  let fixture: ComponentFixture<TermsANDconditionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsANDconditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
