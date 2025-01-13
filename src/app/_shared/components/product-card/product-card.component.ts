import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExtractOriginalPricePipe } from 'app/_shared/pipes/extract-original-price.pipe';
import { PriceLocaleStringPipe } from 'app/_shared/pipes/price-locale-string.pipe';
import { LoadingComponent } from '../loading/loading.component';
import { TomanComponent } from '../toman/toman.component';
import { getDiscountPercentage } from 'app/_shared/utils/getDiscountPercentage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule,PriceLocaleStringPipe, LoadingComponent, TomanComponent, ExtractOriginalPricePipe],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  @Input() product: any;
  @Input() isLoading: boolean = false;
  constructor(private router: Router){

  }
  getDiscountPercentage = getDiscountPercentage;
  navigateToProduct(productId: number){
    this.router.navigate(['/product', productId.toString()]);
  }
}
