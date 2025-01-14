import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'app/_services/products.service';
import { log } from 'console';

@Component({
  selector: 'app-related-products',
  imports: [],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.css'
})
export class RelatedProductsComponent implements OnInit{
  @Input() relatedProductsIds: number[] = [];
  isLoading: boolean = false;
  relatedProducts: any;
    constructor(private productsService: ProductsService){

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
