import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  showMobileMenu : boolean = false;
  categoriesNav: Array<{id: string, name: string }> = [
    {
      id: "3769",
      name: 'پالتو زیپ پلاس'
    },
    {
     id: "681",
      name: 'شال و روسری زیپ پلاس'
    },
    {
      id: "672",
      name: 'کت جین زیپ پلاس'
    },
    {
      id: "520",
      name: 'شلوار جین زیپ پلاس'
    },
    {
      id: "5168",
      name: 'دامن جین زیپ پلاس'
    },
    {
      id: "4379",
      name: 'بادی بلوز بافت کراپ زیپ پلاس'
    }
  ];
  ShowMobileMenuHandler(){
    this.showMobileMenu = !this.showMobileMenu;
  }
}
