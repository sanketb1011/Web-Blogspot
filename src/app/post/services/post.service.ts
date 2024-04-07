import { Injectable } from '@angular/core';
import { postmodel } from '../models/post.model';
import { PostHttpService } from './post-http.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts : postmodel[];
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
        
      },
      (err)=>{
        isadded= false;
        
      })
    return true;
  }
}
