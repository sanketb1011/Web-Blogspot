import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { postmodel } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  posts: postmodel[];
  isliked:boolean =true;
  constructor(public postService :PostService){}
  
  ngOnInit(): void {
    this.loadposts();
  }

  loadposts()
  {
   this.postService.loadallposts();
  }
  popup()
  {
    this.postService.loadallposts();
  }
}
