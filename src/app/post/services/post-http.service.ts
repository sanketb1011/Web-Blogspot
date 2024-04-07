import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { postmodel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostHttpService {

  baseUrl: string;

  constructor(private configservice: ConfigService, private httpclient: HttpClient) {

    this.baseUrl = this.configservice.getbaseurl();

  }

  getposts(): Observable<any[]> {
    return this.httpclient.get<any[]>(this.baseUrl + 'api/Post/GetAllPost');
  }

  addpost(post: postmodel): Observable<postmodel> {
    return this.httpclient.post<postmodel>(this.baseUrl + 'api/Post/AddPost', post);
  }
}
