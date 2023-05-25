import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn:'root'
})
export class CategoryService {
  baseUrl = environment.BASE_BE_URL;
  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get<any>(`${this.baseUrl}categories`);
  }

  getCategoriesByDepartment(input:string[]){
    return this.http.post<any>(`${this.baseUrl}categories/cat-by-department`,{department:input})
  }
  AddNewCategory(input:any){
    return this.http.post<any>(`${this.baseUrl}categories`,input);
  }
}
