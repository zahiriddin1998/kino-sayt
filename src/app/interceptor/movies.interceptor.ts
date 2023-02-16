import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MoviesInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiReq = request.clone({
      params: request.params.set('api_key', '15541eba921815cd9399ab49a5977f16').set('language', 'ru-RU')
    });
    return next.handle(apiReq);
  }
}
