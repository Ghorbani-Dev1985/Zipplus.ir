import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../_services/products.service';
import { CommonModule } from '@angular/common';
import { PriceLocaleStringPipe } from '../_shared/pipes/price-locale-string.pipe';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PriceLocaleStringPipe],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(private productsService: ProductsService) { }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
