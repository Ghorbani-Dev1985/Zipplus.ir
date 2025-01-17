import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { categoriesItems } from 'app/_shared/utils/categoriesItems';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  showMobileMenu : boolean = false;
  categoriesNav: Array<{id: string, name: string }> = categoriesItems;
  ShowMobileMenuHandler(){
    this.showMobileMenu = !this.showMobileMenu;
  }
}
