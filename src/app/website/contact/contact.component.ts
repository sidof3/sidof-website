import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import {FormsModule} from '@angular/forms'
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, FormsModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   onSubmit() {
    alert('Thank you for reaching out! I will get back to you soon.');
  }

}
