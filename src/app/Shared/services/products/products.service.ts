import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Iproducts } from '../../interfaces/Iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient) { }

  products$ : Observable<Iproducts> | undefined;

  
  /**
   * Fetches the products data from the API, and caches the result.
   * The data is fetched only once and subsequent calls return the cached result.
   * @returns an observable of the products data.
   */
  getProducts():Observable<any> {

    if(!this.products$){
      this.products$ = this._http.get<Iproducts>('https://fakestoreapi.com/products').pipe(shareReplay(1));
    }

    return this.products$;
  }
  
}
