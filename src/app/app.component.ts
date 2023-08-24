import { Component, OnInit, OnDestroy  } from '@angular/core';
import { NavMenuService } from './services/navigation-menu.service';
import { ThemeService } from './services/theme.service';
import { CookieService } from 'ngx-cookie-service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
 // @HostListener('window:beforeunload', ['$event'])
 cookieValue = null;
  constructor(
    public navMenuService: NavMenuService, private cookieService:CookieService) { }

    ngOnInit(): void {
      window.addEventListener('beforeunload', this.onBeforeUnload);
      this.cookieValue = this.cookieService.get('uit');
      if(!this.cookieValue){
        this.cookieService.set('uit', uuidv4(),{secure:false});
      }
      }
  
  title = 'AboStore';
  swipeLeft(event:any): void {
    console.log('Swiped', event);
  }
  
  onBeforeUnload(event: Event) {
    // Handle the page refresh or navigation here
    console.log('Window is about to refresh')
  }
  
  ngOnDestroy() {
    window.removeEventListener('beforeunload', this.onBeforeUnload);
  }

}
