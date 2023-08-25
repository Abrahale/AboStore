import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../../sign-in/sign-in.component';
import { GerenralService } from 'src/app/services/generalService.service';
import { CookieService } from 'ngx-cookie-service';
import { isTokenValid } from 'src/app/helpers/helper.functions';
import { MessageService } from 'src/app/modules/shared/services/message.service';

@Component({
  selector: 'abo-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss']
})
export class UserIconComponent {
  constructor(private dialog:MatDialog, private genS:GerenralService, private cookieSerivce: CookieService, private messageS:MessageService){}

  signIn(){
    const authToken = this.cookieSerivce.get('_jtwot')
    if (authToken && isTokenValid(authToken)) {
        this.messageS.showInfo('HI There, you are already logged In, Ask Ab to change the UI for Account')
    }
    else{
      this.dialog.open(SignInComponent)
    }
  }
}
