import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(public commonServices: CommonService,
    public router: Router,
    public storage: Storage) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });
    request = request.clone({
      withCredentials: true
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        this.commonServices.hideLoader();
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.commonServices.hideLoader();
        if (error.status === 401) {
          this.storage.clear();
          this.router.navigate(['login']);
          if (error.error.success === false) {
            this.commonServices.forToast("Login failed");
          } else {
            //this.router.navigate(['login']);
          }
        }
        return throwError(error);
      }));
  }
}
