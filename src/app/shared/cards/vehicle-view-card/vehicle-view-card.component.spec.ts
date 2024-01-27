import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleViewCardComponent } from './vehicle-view-card.component';

describe('VehicleViewCardComponent', () => {
  let component: VehicleViewCardComponent;
  let fixture: ComponentFixture<VehicleViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleViewCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
