import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { postmodel } from '../models/post.model';
import { commentmodel } from '../models/comment.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  postId:string;
  comment :string;
  posts: postmodel[];
  isliked:boolean =true;
  visible:boolean=false;
  comments:commentmodel[];
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

  loadCommentPopup(postId: string)
  {
    this.visible=true;
    this.postId=postId;
    this.postService.loadComment(postId);
  }
  
  Addcomment()
  {
     this.postService.AddComment(this.comment,this.postId);
  }

}
