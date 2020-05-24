import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { CommentDirective } from '../comment/comment.directive';
import { PostService } from './post.service';
import { CommentComponent } from '../comment/comment.component';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @ViewChild(CommentDirective, { static: true }) commentHost: CommentDirective;

  @Input()
  post: Post;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private postService: PostService) { }

  ngOnInit(): void {
  }

  toogleComments(postId: number) {

    if (this.commentHost.viewContainerRef.length > 0) {
      this.commentHost.viewContainerRef.clear();
      return;
    }

    this.postService.getCommentsForPost(postId)
      .subscribe(comments => {
        for (const comment of comments) {
          let componentFactory = this.componentFactoryResolver.resolveComponentFactory(CommentComponent);
          const componentRef = this.commentHost.viewContainerRef.createComponent(componentFactory);
          componentRef.instance.comment = comment;
        }
      });
  }

}
