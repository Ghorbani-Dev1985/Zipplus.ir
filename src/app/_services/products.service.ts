import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = import.meta.env.NG_APP_BASE_URL;
  private consumerKey = import.meta.env.NG_APP_CONSUMER_KEY;
  private consumerSecret = import.meta.env.NG_APP_CONSUMER_SECRET;
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    console.log(this.baseUrl)
    const params = new HttpParams()
      .set('consumer_key', this.consumerKey)
      .set('consumer_secret', this.consumerSecret);

    return this.http.get(`${this.baseUrl}/products?per_page=20`, { params });
  }
}
