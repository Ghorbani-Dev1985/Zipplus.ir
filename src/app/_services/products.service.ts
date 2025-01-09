import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = environment.apiBaseUrl;
  private consumerKey = environment.consumerKey;
  private consumerSecret = environment.consumerSecret;
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    const params = new HttpParams()
      .set('consumer_key', this.consumerKey)
      .set('consumer_secret', this.consumerSecret);

    return this.http.get(`${this.baseUrl}/products?per_page=20`, { params });
  }
}
