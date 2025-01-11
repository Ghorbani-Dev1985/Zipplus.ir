import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../_services/products.service';
import { LoadingService } from './../_services/loading.service';
import { CommonModule } from '@angular/common';
import { PriceLocaleStringPipe } from '../_shared/pipes/price-locale-string.pipe';
import { LoadingComponent } from "../_shared/components/loading/loading.component";
import { TomanComponent } from "../_shared/components/toman/toman.component";
import { ExtractOriginalPricePipe } from 'app/_shared/pipes/extract-original-price.pipe';
import { getDiscountPercentage } from 'app/_shared/utils/getDiscountPercentage';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PriceLocaleStringPipe, LoadingComponent, TomanComponent , ExtractOriginalPricePipe],
  standalone: true,
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  isLoading: boolean = false;
  currentPage: number = 1;
  constructor(private productsService: ProductsService , private loadingService: LoadingService) {
    this.loadingService.loading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
   }
   loadProducts(): void {
    this.productsService.getProducts(this.currentPage).subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }
  nextPage(): void {
    this.currentPage++;
    this.loadProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  goFirstPage(): void {
      this.currentPage = 1;
      this.loadProducts();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getDiscountPercentage = getDiscountPercentage;
}

