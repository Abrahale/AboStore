import { Component, OnInit, OnDestroy  } from '@angular/core';
import { NavMenuService } from './services/navigation-menu.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
 // @HostListener('window:beforeunload', ['$event'])
  constructor(
    public navMenuService: NavMenuService) { }

    ngOnInit(): void {
      window.addEventListener('beforeunload', this.onBeforeUnload);
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
