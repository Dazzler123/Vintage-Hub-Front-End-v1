import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgSpeedoAnimationComponent } from './bg-speedo-animation.component';

describe('BgSpeedoAnimationComponent', () => {
  let component: BgSpeedoAnimationComponent;
  let fixture: ComponentFixture<BgSpeedoAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgSpeedoAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BgSpeedoAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
