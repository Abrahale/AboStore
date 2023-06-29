import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../../sign-in/sign-in.component';

@Component({
  selector: 'abo-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss']
})
export class UserIconComponent {
  constructor(private dialog:MatDialog){}

  signIn(){
    this.dialog.open(SignInComponent)
  }
}
