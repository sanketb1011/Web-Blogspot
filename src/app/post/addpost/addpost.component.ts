import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent implements OnInit{
  

  visible: boolean = true;

  constructor(private postservice :PostService){
    alert('component is loading')
    this.postservice.openpopup$.subscribe((isOpen) => {
      if (isOpen) {
        this.visible=true;
      }
    });
  }

  ngOnInit(): void {
    
  }
  
}
