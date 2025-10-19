import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   
  
  onSubmit() {
    alert('Thank you for reaching out! I will get back to you soon.');
  }

}
