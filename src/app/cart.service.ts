import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = [];

  constructor(private http: HttpClient) { }

  add(product: IProduct) {
    this.cart.push(product);
    this.http.post('/api/cart', this.cart).subscribe(() => {
      console.log(`product ${ product.name } added to cart`);
    });
  }
}
