import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCategoryCardComponent } from './select-category-card.component';

describe('SelectCategoryCardComponent', () => {
  let component: SelectCategoryCardComponent;
  let fixture: ComponentFixture<SelectCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCategoryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
