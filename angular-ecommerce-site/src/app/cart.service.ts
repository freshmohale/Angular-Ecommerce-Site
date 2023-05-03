import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(product: Product) {
    this.items = this.items.filter(item => item.id !== product.id);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
