import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  addNewPost(form: NgForm) {
    this.postService.addPost({ id: 0, userId: 0, title: form.value['title'], body: form.value['body']});
    form.reset();
  }
}
