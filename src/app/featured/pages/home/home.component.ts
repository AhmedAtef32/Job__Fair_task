import {
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';
import { ProductsService } from '../../../Shared/services/products/products.service';
import { Iproducts } from '../../../Shared/interfaces/Iproducts';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from "../../../Shared/components/ui/product-card/product-card.component";
import { SearchPipe } from '../../../core/pipe/search/search.pipe';
import { ProductCardSkeletonComponent } from "../../../Shared/components/ui/product-card/product-card-skeleton/product-card-skeleton.component";
@Component({
  selector: 'app-home',
  imports: [FormsModule, ProductCardComponent, SearchPipe, ProductCardSkeletonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly _productsService = inject(ProductsService);
  private readonly _pLATFORM_ID = inject(PLATFORM_ID);
  products: WritableSignal<Iproducts[]> = signal([]);
  originalProducts!: Iproducts[] ;
  searchTerm: string = '';
  iscaling: boolean = true;
  ngOnInit(): void {
    if (isPlatformBrowser(this._pLATFORM_ID)) {
      this.getAllProducts();
    }
  }


  /**
   * Retrieves all products from the product service and sets the products signal.
   */
  getAllProducts() {
    this._productsService.getProducts().subscribe({
      next: (res) => {
        this.products.set(res);
        this.originalProducts = res;
        this.iscaling = false
      },error: (err) => console.log(err)
    });
  }

  /**
   * Sorts the products based on the selected value of the select element.
   * Available sorting options are:
   * - original: shows the original order of the products.
   * - name-A-to-Z: sorts the products by their title in ascending order.
   * - price-low-to-high: sorts the products by their price in ascending order.
   * - price-high-to-low: sorts the products by their price in descending order.
   * @param event the event emitted when the select element changes.
   */
  sort(event:Event){
    const selectedValue = event.target as HTMLSelectElement;
    console.log(selectedValue.value);
    if(selectedValue.value === 'original'){
      this.products.set([...this.originalProducts]);
    }else if(selectedValue.value === 'name-A-to-Z'){
      this.products.set([...this.originalProducts].sort((a, b) => a.title.localeCompare(b.title)));
    }else if(selectedValue.value === 'price-low-to-high'){
      this.products.set([...this.originalProducts].sort((a, b) => a.price - b.price));
    }else if(selectedValue.value === 'price-high-to-low'){
      this.products.set([...this.originalProducts].sort((a, b) => b.price - a.price));
    }
  }

}
