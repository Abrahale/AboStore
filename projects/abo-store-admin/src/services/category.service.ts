import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn:'root'
})
export class CategoryService {
  baseUrl = environment.BASE_BE_URL;
  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get<any>(`${this.baseUrl}categories`);
  }
  AddNewCategory(input:any){
    return this.http.post<any>("http://localhost:3000/categories",input);
  }
}
