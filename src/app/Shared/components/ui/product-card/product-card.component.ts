import { Component, input, InputSignal } from '@angular/core';
import { Iproducts } from '../../../interfaces/Iproducts';
import { TermPipe } from '../../../../core/pipe/term/term.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [TermPipe ,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product: InputSignal<Iproducts> = input.required();
}
