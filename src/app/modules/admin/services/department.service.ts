import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn:'root'
})
export class DepartmentService {
  baseUrl = environment.BASE_BE_URL;
  constructor(private http: HttpClient) { }

  getAllDepartments(){
    return this.http.get<any>(`${this.baseUrl}departments`);
  }

  AddNewDepartment(input:any){
    return this.http.post<any>(`${this.baseUrl}departments`,input);
  }

  deleteDepartment(id:any){
    return this.http.get<any>(`${this.baseUrl}departments/delete/:?id=${id}`)
  }

}
