import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
/*
 import { AboutComponent } from './about/about.component';
import { AnimalAddComponent } from './animals/animal-add.component';
//import { AnimalDetailComponent } from './animals/animal-detail.component';
import { AnimalListComponent } from './animals/animal-list.component';
import { BookComponent } from './forms/books/book.component';
import { HomeComponent } from './home/home.component';
*/
 


import { ShellComponent } from './home/shell.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductaddComponent } from './products/productadd/productadd.component';
import { TodoPageComponent } from './todo/todo-page.component';
import { AuthGuard } from './user/auth-guard.service';
import { LoginComponent } from './user/login.component';
import { WelcomeComponent } from './welcome/welcome.component'; 


 //import { EventDetailComponent } from './events/event-detail/event-detail.component';
//import { ProductaddComponent } from './products/productadd/productadd.component';


/*const routes: Routes = [
  //{path:'events/:id',component:EventDetailComponent},
 // {path:'addProduct',component:ProductaddComponent},
  {path:'',pathMatch:'full' ,component:AppComponent}]*/

  /*//for navbar routes
   const routes:Routes=[
    {path:'',pathMatch:'full',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'book',component:BookComponent},
    {
      path:'animal', component:AnimalListComponent,
    children:[{path:'addanimal',component:AnimalAddComponent}]
  }
    //{path:'animal/:id',component:AnimalDetailComponent}
    
  ]*/
  
 
//Shell component routes
    const routes:Routes=[
    {path:'',component:ShellComponent,
    children:[{path:'welcome',component:WelcomeComponent},
  
  {
    path:'products',
    component:ProductListComponent,
    canActivate:[AuthGuard],
    children:[{path:'addProduct',component:ProductaddComponent}]
  },
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'todo',
  loadChildren:()=>import('./todo/todo.module').then((m)=>m.TodoModule),
},
  {path:'login',component:LoginComponent}
  
  ]}
 
  
  ]
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
