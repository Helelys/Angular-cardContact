import { Component } from '@angular/core';
import { TextosComponent } from "../textos/textos.component";
import { PictureComponent } from "../picture/picture.component";
import { TitlesComponent } from "../titles/titles.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TextosComponent, PictureComponent, TitlesComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
