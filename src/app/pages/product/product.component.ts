import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductsService } from 'app/_services/products.service';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ExtractOriginalPricePipe } from 'app/_shared/pipes/extract-original-price.pipe';
import { PriceLocaleStringPipe } from 'app/_shared/pipes/price-locale-string.pipe';
import { TomanComponent } from "../../_shared/components/toman/toman.component";
import { SafeHtmlPipe } from 'app/_shared/pipes/safe-html.pipe';
import { RelatedProductsComponent } from "./related-products/related-products.component";
import { ProductLoadingComponent } from "./product-loading/product-loading.component";


@Component({
  selector: 'app-product',
  imports: [CommonModule, ExtractOriginalPricePipe, PriceLocaleStringPipe, TomanComponent, SafeHtmlPipe, RelatedProductsComponent, ProductLoadingComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProductsService]
})
export class ProductComponent implements OnInit{
 route: ActivatedRoute = inject(ActivatedRoute)
 router: Router = inject(Router)
 productsService: ProductsService = inject(ProductsService)
 product: any;
 productImages:any;
 isLoading: boolean = false;
 productId!: string;
 productQty: number = 1;
 relatedProductsIds : number[] = []
 constructor(){
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0);
    }
  });
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
    this.productQty -= 1;
    }
 }
}
