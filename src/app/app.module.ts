import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { CommentDirective } from './comment/comment.directive';
import { PostService } from './post/post.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    CommentDirective,
    NewPostComponent
  ],
  imports: [
    InfiniteScrollModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  entryComponents: [ CommentComponent],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
