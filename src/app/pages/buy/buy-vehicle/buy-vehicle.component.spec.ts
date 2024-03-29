import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyVehicleComponent } from './buy-vehicle.component';

describe('BuyVehicleComponent', () => {
  let component: BuyVehicleComponent;
  let fixture: ComponentFixture<BuyVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyVehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
