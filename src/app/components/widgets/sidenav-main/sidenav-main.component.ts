import { Component } from '@angular/core';
import { SideNavMainService } from 'src/app/services/sideNavMain.service';

@Component({
  selector: 'abo-sidenav-main',
  templateUrl: './sidenav-main.component.html',
  styleUrls: ['./sidenav-main.component.scss']
})
export class SidenavMainComponent {
  constructor(public sideNavService: SideNavMainService){}
}
