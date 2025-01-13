import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'app/_services/products.service';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']

})
export class ProductComponent implements OnInit{
 product: any;
 productImages:any;
 isLoading: boolean = false;
 productId!: string;
 splide!: Splide;
 constructor(private productsService: ProductsService , private route: ActivatedRoute){

 }

 ngOnInit(): void {
  this.route.params.subscribe(async (params) => {
    this.productId = params['id']
    this.isLoading = true;
    try {
     this.product = await firstValueFrom(this.productsService.getProduct(this.productId))
     this.isLoading = false;
     this.productImages = this.product.images
     console.log(this.product)
    } catch (error) {
      this.isLoading = false;
    }
  })
 }
}
