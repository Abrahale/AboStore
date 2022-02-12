import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavMenuService } from 'src/app/services/navigation-menu.service';

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
    ) { }

    ngOnInit(): void {
    }
     clickMenuItem(): void { }
}