import { Component } from '@angular/core';
import { HeaderComponent } from "./_shared/components/header/header.component";
import { FooterComponent } from "./_shared/components/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, FooterComponent, RouterModule]
})
export class AppComponent {
  title = 'CoffeeHome';
}
