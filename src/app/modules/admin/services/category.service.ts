import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BaseResponseModel } from 'src/app/models/response-base.model';
@Injectable({
  providedIn:'root'
})
export class CategoryService {
  baseUrl = environment.BASE_BE_URL;
  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get<BaseResponseModel<any>>(`${this.baseUrl}categories`);
  }

  getCategoriesByDepartment(input:string[]){
    return this.http.post<BaseResponseModel<any>>(`${this.baseUrl}categories/cat-by-department`,{department:input})
  }

  addNewCategory(input:any){
    return this.http.post<BaseResponseModel<any>>(`${this.baseUrl}categories`,input);
  }

  deleteCategory(id:string){
    return this.http.get<BaseResponseModel<any>>(`${this.baseUrl}categories/delete/:?id=${id}`)
  }
}
