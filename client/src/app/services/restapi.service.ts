import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  private apiurl = 'http://localhost:4201/';
  constructor(private http: HttpClient) {}

  fetchTopHeadlines(): Observable<any> {
    return this.http.get<any>(this.apiurl);
  }
}
