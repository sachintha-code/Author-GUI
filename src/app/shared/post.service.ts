import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:56568/api/post'
  formData: Post = new Post() 
  list  : Post[];

  savePostDetails(){
    return this.http.post(this.baseURL, this.formData);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Post[]);
  }
}
