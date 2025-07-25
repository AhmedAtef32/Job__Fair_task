import {
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsService } from '../../../Shared/services/products/products.service';
import { Iproducts } from '../../../Shared/interfaces/Iproducts';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [AllProductsComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly _productsService = inject(ProductsService);
  private readonly _pLATFORM_ID = inject(PLATFORM_ID);
  products: WritableSignal<Iproducts[]> = signal([]);
  searchTerm: string = '';
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
      },
    });
  }
}
