import { Component, OnInit } from '@angular/core';
import { NavMenuService } from './services/navigation-menu.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public navMenuService: NavMenuService, private themeService:ThemeService) { }

    ngOnInit(): void {
        
    }
  title = 'AboStore';
  swipeLeft(event:any): void {
    console.log('Swiped', event);
  }
  changeTheme():void{
    console.log('changing the theme')
    this.themeService.changeActiveTheme();
  }
}
