import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styles: [
  ]
})
export class PostFormComponent implements OnInit {

  constructor(public service: PostService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.savePostDetails().subscribe(
      res=>{

      },
      err =>{
        console.log(err);
      }
    );
  }

}
