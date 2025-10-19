import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink, RouterOutlet } from "@angular/router";
import { TechnicalServicesComponent } from "../technical-services/technical-services.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterLink, TechnicalServicesComponent, FooterComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
