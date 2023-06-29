import { HttpClient, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseResponseModel } from "src/app/models/response-base.model";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

  export class FileUploadService {
    baseUrl = environment.BASE_BE_URL;
    constructor(private http: HttpClient) { }

    upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('image', file);

    const req = new HttpRequest('POST', `${this.baseUrl}file-uploads/upload`, formData, {
        reportProgress: true,
        responseType: 'json',
    });

    return this.http.request(req);
    }
    
    getFiles(){
    return this.http.get<BaseResponseModel<any>>(`${this.baseUrl}file-uploads/get-files`);
    }

    deleteFile(key:string){
        return this.http.post<BaseResponseModel<any>>(`${this.baseUrl}file-uploads/delete-file`,{key})
    }
  }