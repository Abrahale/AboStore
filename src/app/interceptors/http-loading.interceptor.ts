import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import { LoadingService } from '../services/loading.service';


@Injectable({
  providedIn: 'root'
})
export class HttpLoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {
    console.log('is this running constructor')
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.onNewRequest();
    return next.handle(req).pipe(
      finalize(() => this.loadingService.onFinishedRequest())
    );
  }
}
