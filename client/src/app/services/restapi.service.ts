import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestapiService {
  private apiurl = 'http://localhost:4201/';
  constructor(private http: HttpClient) {}

  fetchTopHeadlines(): Observable<any> {
    return this.http.get<any>(this.apiurl);
  }

  createPost(post:any): Observable<any> {
    return this.http.post<any>(this.apiurl,post);
  }

  deletePost(id:any):Observable<any>{
    return this.http.delete<any>(this.apiurl+id,id)
  }
}
