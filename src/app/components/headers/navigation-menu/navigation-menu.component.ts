import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavMenuService } from 'src/app/services/navigation-menu.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'abo-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

    myPoliciesToggle = false;
    photo = '';
    initials = '';
    policyNumber = '';

    constructor(
        public navMenuService: NavMenuService,
        private router: Router,
        private themeService:ThemeService
    ) { }

    ngOnInit(): void {
    }
     clickMenuItem(): void { }
     changeTheme():void{
      this.themeService.changeActiveTheme();
    }
}