import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { AddpostComponent } from './addpost/addpost.component';

const routes: Routes = [
  { path: '' ,component : PostComponent},
  {path: 'add-post', component :AddpostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
