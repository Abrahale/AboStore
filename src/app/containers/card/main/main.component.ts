import { Component } from '@angular/core';
import { NavMenuService } from 'src/app/services/navigation-menu.service';

@Component({
  selector: 'abo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
    public navMenuService: NavMenuService) { }

  swipeLeft(event:any): void {
    console.log('Swiped', event);
  }
}
