import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PostService } from '../../post/services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  items: MenuItem[] = [];
  visible : boolean = false;
  postform : FormGroup;
  constructor( private postservice :PostService,private formbuilder:FormBuilder ) {
       
  }
  ngOnInit(): void {
    this.loadnavbarelement();
    this.loadpostform();
  }

  loadnavbarelement(){
    this.items = [

      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/tab1']},
      {label: 'Tab 2', icon: 'pi pi-fw pi-calendar', routerLink: ['/tab2']},
      {label: 'Tab 3', icon: 'pi pi-fw pi-user', command:()=>this.openaddpostpopup() },     
    ];
  }

  loadpostform(){
    this.postform =this.formbuilder.group({
      posttitle :['',Validators.required],
      postbody: ['',Validators.required]
    })
  }

  openaddpostpopup(){
    
    this.visible=true;
      
  }
  
  onsubmit(){
  
    if(this.postform.valid)
    {
      const  posttitle =this.postform.get('posttitle')?.value;
      const  postbody =this.postform.get('postbody')?.value;
      const isadded = this.postservice.addpost(posttitle,postbody);
    if(isadded){
      this.visible=false;
      this.postform.reset();
    }
    }
    else
    {
      alert("enter the proper fields");
    }
  }
}
