import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";


@Injectable({

  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor( private spinner: NgxSpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();
    return next.handle(req).pipe(
      finalize(
        () => {
          this.spinner.hide();
        }
      )
    )
  }
}
