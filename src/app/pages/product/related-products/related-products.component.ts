import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductsService } from 'app/_services/products.service';
import { log } from 'console';

@Component({
  selector: 'app-related-products',
  imports: [],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.css',
  providers: [ProductsService]
})
export class RelatedProductsComponent implements OnInit{
  productsService: ProductsService = inject(ProductsService)
  @Input() relatedProductsIds: number[] = [];
  isLoading: boolean = false;
  relatedProducts: any;
    constructor(){

    }
    ngOnInit(): void {
      this.isLoading = true;
      if(this.relatedProductsIds.length > 0){
        this.productsService.getRelatedProducts(this.relatedProductsIds).subscribe((data) => {
          this.relatedProducts = data;
          this.isLoading = false;
          console.log(this.relatedProducts)
        })
      }
    }
}
