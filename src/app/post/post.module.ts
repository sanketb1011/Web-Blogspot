import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post/post.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { AddpostComponent } from './addpost/addpost.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostComponent,
    AddpostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PostRoutingModule,
    CardModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports:[
    AddpostComponent
  ]
})
export class PostModule { }
