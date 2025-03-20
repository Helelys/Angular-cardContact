import { Component } from '@angular/core';
import { TextosComponent } from "../textos/textos.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TextosComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
