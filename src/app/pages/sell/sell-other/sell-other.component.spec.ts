import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOtherComponent } from './sell-other.component';

describe('SellOtherComponent', () => {
  let component: SellOtherComponent;
  let fixture: ComponentFixture<SellOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellOtherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
