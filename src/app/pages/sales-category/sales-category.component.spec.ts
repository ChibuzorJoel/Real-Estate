import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCategoryComponent } from './sales-category.component';

describe('SalesCategoryComponent', () => {
  let component: SalesCategoryComponent;
  let fixture: ComponentFixture<SalesCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesCategoryComponent]
    });
    fixture = TestBed.createComponent(SalesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
