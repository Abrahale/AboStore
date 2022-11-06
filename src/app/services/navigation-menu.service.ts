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
        return [
            {
                displayLabel:false,
                label: 'Search',
                link: `/search`,
                icon: 'icon icon-search1'
            },
            {
                displayLabel:false,
                label: 'Wish',
                link: `/wish`,
                icon: 'icon icon-heart'
            },
            { 
            displayLabel:false,
            label: 'Sign In',
            link: `/sign-in`,
            icon:'icon icon-enter'
        }, 
 
        {
            displayLabel:false,
            label: 'My Cart',
            icon:'icon icon-shopping-cart',
            link: `/cart`,
        }];
    }
}