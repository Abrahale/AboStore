import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NavMenuService {

    private _mobiMenuToggled = false;
    private _navigationLinks: any[] = [];

    get mobiMenuToggled(): boolean {
        return this._mobiMenuToggled;
    }

    get navigationLinks(): any[] {
        return this._navigationLinks;
    }

    constructor( private router: Router) {
        this._navigationLinks = this.getNavigationLinks();
    }

    toggleMobiMenu(): void {
        this._mobiMenuToggled = !this._mobiMenuToggled;
    }

    closeMobiMenu(): void {
        this._mobiMenuToggled = false;
    }

    getNavigationLinks(): any[] {
        return [{
            label: 'Sign In',
            link: `/sign-in`,
        }, {
            label: 'Sign Up',
            link: `/sign-up`,
        }, {
            label: 'Profile',
            link: `/profile`,
        }, {
            label: 'My Cart',
            link: `/cart`,
        }];
    }
}