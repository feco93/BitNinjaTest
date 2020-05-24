import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Comment } from '../comment/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postAdded: EventEmitter<Post> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getCommentsForPost(postId: number) {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

  addPost(post: Post) {
    const result = this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
    this.postAdded.emit(post);
    return result;
  }
}
