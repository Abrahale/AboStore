import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/services/navigation-menu.service';

@Component({
  selector: 'abo-navigation-menu-mobi',
  templateUrl: './navigation-menu-mobi.component.html',
  styleUrls: ['./navigation-menu-mobi.component.scss']
})
export class NavigationMenuMobiComponent implements OnInit {

  constructor(public navMenuService: NavMenuService) { }

  ngOnInit(): void {
  }

}
