import { inject, Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService{
  http : HttpClient = inject(HttpClient);
  loadingService: LoadingService = inject(LoadingService);
  private cartKey = 'cart';
  constructor() { }
  getCart(): any[] {
     const cart = localStorage.getItem(this.cartKey)
     return cart ? JSON.parse(cart) : [];
  }
  saveCart(cart: any[]): void {
    localStorage.setItem(this.cartKey , JSON.stringify(cart));
  }
  addToCart(product: any): void {
   const cart = this.getCart();
   const cartItemIndex = cart.findIndex((item) => item.id === product.id);
   console.log(cartItemIndex)
   if(cartItemIndex !== -1){
    cart[cartItemIndex].quantity += 1;
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
   }else{
    cart.push({...product , quantity: 1})
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
   }
   this.saveCart(cart)
  }
  deleteFromCart(productId: string): void {
    let cart = this.getCart();
    cart = cart.filter((item) => item.id !== productId)
    this.saveCart(cart);
  }
  updateCart(productId: string, quantity: number): void {
    let cart = this.getCart();
    const index = cart.findIndex((item) => item.id === productId);
    if (index !== -1) {
      if (quantity > 0) {
        cart[index].quantity = quantity;
      } else {
        cart.splice(index, 1);
      }
    }
    this.saveCart(cart);
  }
  clearCart(): void {
    localStorage.removeItem(this.cartKey)
  }
}
