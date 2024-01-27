import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-category-card',
  standalone: true,
  imports: [],
  templateUrl: './select-category-card.component.html',
  styleUrl: './select-category-card.component.scss'
})
export class SelectCategoryCardComponent {
  @Input() cardTitle: string | undefined;
  @Input() cardDescription: string | undefined;
  @Input() featurePath: string = ''; //buy or sell
  @Input() actionTypePath: string = ''; //vehicle, parts or accessories

  constructor(private router: Router) {
  }

  navigate() {
    this.router.navigate([`${this.featurePath}-${this.actionTypePath}`]);
    console.log(this.featurePath + "-" + this.actionTypePath)
  }
}
