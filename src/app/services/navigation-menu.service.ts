import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class NavMenuService {
    baseUrl = environment.BASE_BE_URL;
    private _department: {id:string, name:string, description:string}[]=[];
    private _mobiMenuToggled = false;
    private _navigationLinks: any[] = [];

    get mobiMenuToggled(): boolean {
        return this._mobiMenuToggled;
    }

    get navigationLinks(): any[] {
        return this._navigationLinks;
    }

    get departments(){
      return this._department;
    }

    constructor( private router: Router, private http:HttpClient) {
        this._navigationLinks = this.getNavigationLinks();
        this.http.get<any>(`${this.baseUrl}departments`).subscribe(data => this._department = data);
    }

    getDepart(){
      return this.http.get<any>(`${this.baseUrl}departments`);
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
            displayLabel:true,
            label: 'SignIn',
            link: `/sign-in`,
            icon:'icon icon-enter'
        }
];
    }
}
