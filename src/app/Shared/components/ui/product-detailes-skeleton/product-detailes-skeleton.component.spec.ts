import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailesSkeletonComponent } from './product-detailes-skeleton.component';

describe('ProductDetailesSkeletonComponent', () => {
  let component: ProductDetailesSkeletonComponent;
  let fixture: ComponentFixture<ProductDetailesSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailesSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailesSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
