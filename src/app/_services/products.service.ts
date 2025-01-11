import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Environments } from 'app/_shared/environments/environments';
import { finalize, Observable, Subscription } from 'rxjs';
import { LoadingService } from './loading.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnDestroy {
  private subscription: Subscription = new Subscription();

  constructor(private http: HttpClient, private loadingService: LoadingService) { }
  getProducts(productPage:number = 1): Observable<any> {
    const params = new HttpParams()
      .set('consumer_key', Environments.consumerKey)
      .set('consumer_secret', Environments.consumerSecret)
      .set('per_page', '20')
      .set('page', productPage.toString());
      this.loadingService.showLoading();
    const request = this.http.get(`${Environments.baseUrl}/products`, { params }).pipe(
      finalize(() => {
        this.loadingService.hideLoading();
      })
    );
    return request;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

