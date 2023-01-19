import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SideNavMainService {
    baseUrl = environment.BASE_BE_URL;
    constructor(private http: HttpClient) {
        this.getDepartmentsDb();
     }

    getDepart(){
      return this.http.get<any>(`${this.baseUrl}departments`);
    }

    private _toggle = false;
    private _departments: any[] = [];

    get toggled(): boolean {
        return this._toggle;
    }

    get getDepartments(): any[] {
        return this._departments;
    }

    toggleMenu(): void {
        this._toggle = !this._toggle;
        console.log('toggled', this._toggle)
    }

    close(): void {
        this._toggle = false;
    }

    getDepartmentsDb(): void {
        this.getDepart().subscribe(_ => this._departments = _)
    }
}
