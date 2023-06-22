import { HttpClient, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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
    
    getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}file-uploads/get-files`);
    }

    deleteFile(key:string):Observable<any>{
        return this.http.post<any>(`${this.baseUrl}file-uploads/delete-file`,{key})
    }
  }