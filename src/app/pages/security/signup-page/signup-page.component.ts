import {Component} from '@angular/core';
import {RouterLink} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {

}
