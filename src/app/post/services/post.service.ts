import { Injectable } from '@angular/core';
import { postmodel } from '../models/post.model';
import { PostHttpService } from './post-http.service';
import { BehaviorSubject } from 'rxjs';
import { commentmodel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts : postmodel[];
  public comments:commentmodel[];
  private addpostdialog= new BehaviorSubject<boolean>(false);
  openpopup$=this.addpostdialog.asObservable();

  constructor(private httppostservice:PostHttpService) { }

 
  loadallposts() {
    this.httppostservice.getposts().subscribe(
      (respose)=>{
        this.posts=respose.map(item=> item as postmodel);
        console.log(this.posts);
        return this.posts;  
      },
      (err)=>{
        console.log(err);
        return this.posts; 
      }
    )
   
  }

  openpopup(){
    alert('called the method from the service');
    this.addpostdialog.next(true);
  }

  addpost (posttitle:string,postbody:string) :  boolean{

    var isadded :boolean=false;
    const post : postmodel =new postmodel();
    post.userId='3fa85f64-5717-4562-b3fc-2c963f66afa6';      
    post.postTitle=posttitle;
    post.postBody=postbody;
    
    console.log(post);
    this.httppostservice.addpost(post).subscribe(
      (response)=>{
        console.log(response);
        isadded= true;
        this.loadallposts();
      },
      (err)=>{
        isadded= false;
        
      })
    return true;
  }
  loadComment(postId:string){
    this.httppostservice.getcomments(postId).subscribe(
      (response)=>{
        this.comments=response.map(item=> item as commentmodel)
        return this.comments;
      }
    )
  }
  AddComment(comment:string,postId: string)
  {
    let commentModel : commentmodel=new commentmodel();
    commentModel.body=comment;
    commentModel.postId=postId;
    commentModel.userId='3fa85f64-5717-4562-b3fc-2c963f66afa6';
     this.httppostservice.addcomment(commentModel).subscribe(
      (response)=>{
        this.comments.push(response);
      }
     )
  }

}
