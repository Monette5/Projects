import { Component } from '@angular/core';
import * as RandomCat from '../assets/randomCat.js';
declare var RandomCat: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  //var randomCat = new RandomCat('random-cat');
}
