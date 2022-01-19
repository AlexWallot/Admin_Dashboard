import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultsComponent } from './layouts/defaults/defaults.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { PostsComponent } from './module/posts/posts.component';

const routes: Routes = [{
  path: '',
  component: DefaultsComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
