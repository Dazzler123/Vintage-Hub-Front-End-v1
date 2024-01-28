import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSignupPageComponent } from './vendor-signup-page.component';

describe('VendorSignupPageComponent', () => {
  let component: VendorSignupPageComponent;
  let fixture: ComponentFixture<VendorSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorSignupPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendorSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
