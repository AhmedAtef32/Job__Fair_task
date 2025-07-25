import { Injectable, signal, WritableSignal } from '@angular/core';
import { Iproducts } from '../../../Shared/interfaces/Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartProducts:WritableSignal<Iproducts[]> = signal([])

  getCartProducts(){

    if(localStorage.getItem('cartProducts') !== null){
      this.cartProducts.set(JSON.parse(localStorage.getItem('cartProducts')!))
    }

  }



}
