import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient){ }


  getTrending(type: 'day' | 'week'): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'trending/movie/' + type)
  }

  getPopular(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'movie/popular' )
  }

  getTv(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'tv/popular')
  }
}
