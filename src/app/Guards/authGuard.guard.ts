import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../modules/customer/sign-in/sign-in.component';
import { isTokenValid } from '../helpers/helper.functions';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private router: Router, private dialog: MatDialog, private cookieService:CookieService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authToken = this.cookieService.get('_jtwot')
    if (authToken && isTokenValid(authToken)) {
      return true
    }

    const dialogRef = this.dialog.open(SignInComponent,{data:{message:"I want to display this"}});

    dialogRef.afterClosed().subscribe(result => {
        console.log(result)
      if (result === 'success') {
        this.router.navigate([state.url]);
      } else {
        this.router.navigate(['/']);
      }
    });

    return false;
  }
}