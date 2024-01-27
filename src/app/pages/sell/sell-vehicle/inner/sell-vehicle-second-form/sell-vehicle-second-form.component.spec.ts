import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellVehicleSecondFormComponent } from './sell-vehicle-second-form.component';

describe('SellVehicleSecondFormComponent', () => {
  let component: SellVehicleSecondFormComponent;
  let fixture: ComponentFixture<SellVehicleSecondFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellVehicleSecondFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellVehicleSecondFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
