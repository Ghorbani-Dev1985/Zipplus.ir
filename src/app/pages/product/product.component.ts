import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'app/_services/products.service';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ExtractOriginalPricePipe } from 'app/_shared/pipes/extract-original-price.pipe';
import { PriceLocaleStringPipe } from 'app/_shared/pipes/price-locale-string.pipe';
import { TomanComponent } from "../../_shared/components/toman/toman.component";
import { SafeHtmlPipe } from 'app/_shared/pipes/safe-html.pipe';
import { RelatedProductsComponent } from "./related-products/related-products.component";


@Component({
  selector: 'app-product',
  imports: [CommonModule, ExtractOriginalPricePipe, PriceLocaleStringPipe, TomanComponent, SafeHtmlPipe, RelatedProductsComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProductsService]
})
export class ProductComponent implements OnInit{
 route: ActivatedRoute = inject(ActivatedRoute)
 productsService: ProductsService = inject(ProductsService)
 product: any;
 productImages:any;
 isLoading: boolean = false;
 productId!: string;
 productQty: number = 1;
 relatedProductsIds : number[] = []
 constructor(){

 }
 ngOnInit(): void {
  this.route.params.subscribe(async (params) => {
    this.productId = params['id']
    this.isLoading = true;
    try {
     this.product = await firstValueFrom(this.productsService.getProduct(this.productId))
     this.isLoading = false;
     this.productImages = this.product.images
     this.relatedProductsIds = this.product.related_ids;
     console.log(this.product)
    } catch (error) {
      this.isLoading = false;
    }
  })
 }
 increaseQty(){
  this.productQty++
 }
 decreaseQty(){
  if(this.productQty > 1){
    this.productQty -= this.productQty
    }
 }
}
