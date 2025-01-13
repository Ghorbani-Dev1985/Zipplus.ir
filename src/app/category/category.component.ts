import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'app/_services/products.service';
import { LoadingComponent } from 'app/_shared/components/loading/loading.component';
import { ProductCardComponent } from 'app/_shared/components/product-card/product-card.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-category',
  imports: [CommonModule, LoadingComponent, ProductCardComponent],
  templateUrl: './category.component.html',
  styles: ``
})
export class CategoryComponent implements OnInit{
  productsByCategory: any[] = [];
  isLoading: boolean = false;
  categoryId!: string;
  currentPage: number = 1;
  categoryName: string = "";
  countOfProducts: string = "";
  constructor(private productsService: ProductsService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.categoryId = params['id']
      this.isLoading = true;
      try {
       this.productsByCategory = await firstValueFrom(this.productsService.getProductsByCategory(this.categoryId))
       this.categoryName = this.productsByCategory[0].categories[0].name;
       this.countOfProducts = this.productsByCategory.length.toString();
       this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
      }
    })
  }

  loadProductsByCategory(): void {
    this.isLoading = true;
    this.productsService.getProductsByCategory(this.categoryId).subscribe({
      next: (products) => {
        this.productsByCategory = products;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading products', error);
        this.isLoading = false;
      }
    });
  }
  nextPage(): void {
    this.currentPage++;
    this.loadProductsByCategory();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProductsByCategory();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  goFirstPage(): void {
      this.currentPage = 1;
      this.loadProductsByCategory();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
