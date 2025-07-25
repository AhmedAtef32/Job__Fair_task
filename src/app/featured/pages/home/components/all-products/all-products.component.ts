import { Component, Input, input, InputSignal } from '@angular/core';
import { ProductCardComponent } from "../../../../../Shared/components/ui/product-card/product-card.component";
import { Iproducts } from '../../../../../Shared/interfaces/Iproducts';
import { SearchPipe } from '../../../../../core/pipe/search/search.pipe';

@Component({
  selector: 'app-all-products',
  imports: [ProductCardComponent ,SearchPipe],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {

  @Input({required:true}) allProducts!:Iproducts[]
  @Input() searchTerm:string = ''
}
