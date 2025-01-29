import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  framWork :string="start Framework";
  paragraph :string = "Graphic Artist - Web Designer - Illustrator"
  imgSrc:string="/img/avataaars.svg"


}
