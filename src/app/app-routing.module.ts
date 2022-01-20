import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultsComponent } from './layouts/defaults/defaults.component';
import { ArticlesComponent } from './module/articles/articles.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { LoginComponent } from './module/login/login.component';
import { PostsComponent } from './module/posts/posts.component';

const routes: Routes = [{
    path: '',
    component: LoginComponent
  },
  {
  path: '',
  component: DefaultsComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'posts',
    component: PostsComponent
  },{
    path: 'articles',
    component: ArticlesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
