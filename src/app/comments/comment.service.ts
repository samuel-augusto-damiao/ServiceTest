import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  getComments() : Observable<Comment[]>{
      return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
