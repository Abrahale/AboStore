import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})

export class UserService {
    baseUrl = environment.BASE_BE_URL;
    constructor(private http: HttpClient) { }
  
    getUsers(){
      return this.http.get<any>(`${this.baseUrl}users`);
    }

    AddNewUser(input:any){
      return this.http.post<any>(`${this.baseUrl}users`,input);
    }

    deletUser(id:string){
      console.log(id)
      return this.http.get<any>(`${this.baseUrl}users/delete/:?id=${id}`)
    }
}