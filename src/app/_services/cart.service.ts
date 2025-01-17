import { inject, Injectable, OnDestroy } from '@angular/core';
import { LoadingService } from './loading.service';
import { finalize, Observable, Subscription } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Environments } from 'app/_shared/environments/environments';

@Injectable()
export class CartService implements OnDestroy{
  private subscription: Subscription = new Subscription();
  http : HttpClient = inject(HttpClient)
  loadingService: LoadingService = inject(LoadingService)
  constructor() { }
  addToCart(productId: string, quantity: string, variationId: string): Observable<any> {
    const cartItems = {
      product_id: productId,
      quantity: quantity,
      variation_id: variationId
    };
    const params = new HttpParams()
    .set('consumer_key', Environments.consumerKey)
    .set('consumer_secret', Environments.consumerSecret);
    const request = this.http.post(`${Environments.baseUrl}/cart/add`, cartItems, {params}).pipe(
      finalize(() => {
        this.loadingService.hideLoading();
      })
    );
    return request
  }
  getCart(): Observable<any> {
    const params = new HttpParams()
    .set('consumer_key', Environments.consumerKey)
    .set('consumer_secret', Environments.consumerSecret);
    const request = this.http.get(`${Environments.baseUrl}/cart`, {params}).pipe(
      finalize(() => {
        this.loadingService.hideLoading();
      })
    );
    return request
  }
  deleteFromCart(cartItemKey: string): Observable<any> {
    const params = new HttpParams()
    .set('consumer_key', Environments.consumerKey)
    .set('consumer_secret', Environments.consumerSecret);
    const request = this.http.delete(`${Environments.baseUrl}/cart/remove/${cartItemKey}`, {params}).pipe(
      finalize(() => {
        this.loadingService.hideLoading();
      })
    );
    return request
  }
  updateCart(cartItemKey: string, quantity:number): Observable<any> {
    const params = new HttpParams()
    .set('consumer_key', Environments.consumerKey)
    .set('consumer_secret', Environments.consumerSecret)
    .set('quantity' , quantity);
    const request = this.http.put(`${Environments.baseUrl}/cart/update/${cartItemKey}`, {params}).pipe(
      finalize(() => {
        this.loadingService.hideLoading();
      })
    );
    return request
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
