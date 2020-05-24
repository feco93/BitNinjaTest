import { Component } from '@angular/core';
import { Post } from './post/post';
import { PostService } from './post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BitNinjaTest';
  allPosts: Post[];
  renderedPosts: Post[] = [];
  numberOfRenderedPosts = 0;
  renderOnScroll = 10;
  isLoading = true;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.isLoading = false;
      this.allPosts = posts;
      this.addPostsToRender();
    });

    this.postService.postAdded.subscribe((post: Post) => {
      this.renderedPosts.unshift(post);
      this.numberOfRenderedPosts += 1;
    });
  }

  addPostsToRender() {
    for (let index = this.numberOfRenderedPosts; index < Math.min(this.numberOfRenderedPosts + this.renderOnScroll, this.allPosts.length); index++) {
      const element = this.allPosts[index];
      this.renderedPosts.push(element);
    }
    this.numberOfRenderedPosts += this.renderOnScroll;
  }

  onScrollDown() {
    this.addPostsToRender();
  }

}
