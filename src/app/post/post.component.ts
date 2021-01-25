import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
  ]
})
export class PostComponent implements OnInit {

  constructor(public service: PostService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
