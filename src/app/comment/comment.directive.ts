import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[comment-host]',
})
export class CommentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
