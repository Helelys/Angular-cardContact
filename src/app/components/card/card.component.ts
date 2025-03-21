import { Component } from '@angular/core';
import { TextosComponent } from "../textos/textos.component";
import { PictureComponent } from "../picture/picture.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TextosComponent, PictureComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
