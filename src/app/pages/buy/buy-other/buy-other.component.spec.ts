import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyOtherComponent } from './buy-other.component';

describe('BuyOtherComponent', () => {
  let component: BuyOtherComponent;
  let fixture: ComponentFixture<BuyOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyOtherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
