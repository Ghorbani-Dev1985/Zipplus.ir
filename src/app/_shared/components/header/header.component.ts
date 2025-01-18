import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from 'app/_services/cart.service';
import { categoriesItems } from 'app/_shared/utils/categoriesItems';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  providers: [CartService]
})
export class HeaderComponent implements OnInit{
  cartService: CartService = inject(CartService)
  showMobileMenu : boolean = false;
  categoriesNav: Array<{id: string, name: string }> = categoriesItems;
  cartItems: any[] = []
  ShowMobileMenuHandler(){
    this.showMobileMenu = !this.showMobileMenu;
  }
  ngOnInit(): void {
    this.loadCart()
    console.log(this.cartItems)
  }
  loadCart(): void {
    this.cartItems = this.cartService.getCart()

  }
}
