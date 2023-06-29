import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../modules/customer/sign-in/sign-in.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private dialog: MatDialog) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      return true;
    }

    const dialogRef = this.dialog.open(SignInComponent);

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