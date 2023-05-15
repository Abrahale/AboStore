import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn:'root'
})
export class UsersService {
  baseUrl = environment.BASE_BE_URL;
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(`${this.baseUrl}users`);
  }
  AddNewProfile(input:any){
    return this.http.post<any>(`${this.baseUrl}users`,input);
  }
}
