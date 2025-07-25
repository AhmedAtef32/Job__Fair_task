import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../Shared/services/products/products.service';
import { Iproducts } from '../../../Shared/interfaces/Iproducts';
import { CurrencyPipe } from '@angular/common';
import { ProductDetailesSkeletonComponent } from "../../../Shared/components/ui/product-detailes-skeleton/product-detailes-skeleton.component";

@Component({
  selector: 'app-product-detailes',
  imports: [CurrencyPipe, ProductDetailesSkeletonComponent],
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.css'
})
export class ProductDetailesComponent implements OnInit {

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _productsService = inject(ProductsService);
  product!:Iproducts
  id!:string ;


  ngOnInit(): void {
    this.getIdFromRoute();
    this.getProductById();

  }



  /**
   * Extracts the id parameter from the route.
   * Subscribes to route parameter changes and assigns the id to the local variable.
   * @returns {Subscription} subscription to route parameter changes
   */
getIdFromRoute() {
  return this._activatedRoute.params.subscribe(params => {
    this.id = params['id'];
  });
}


  /**
   * Fetches the product from the product service by id.
   * Subscribes to the observable and assigns the response to the local variable.
   * @returns {Subscription} subscription to the product observable
   */
getProductById() {
  return this._productsService.getProductById(this.id).subscribe({
    next: (res) =>{
      console.log(res);
      this.product = res
    },
  });


}




}
