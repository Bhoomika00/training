import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimalDetailComponent } from './animals/animal-detail.component';
import { AnimalListComponent } from './animals/animal-list.component';
import { AppComponent } from './app.component';
import { BookComponent } from './forms/books/book.component';
import { HomeComponent } from './home/home.component';
//import { EventDetailComponent } from './events/event-detail/event-detail.component';
//import { ProductaddComponent } from './products/productadd/productadd.component';


/*const routes: Routes = [
  //{path:'events/:id',component:EventDetailComponent},
 // {path:'addProduct',component:ProductaddComponent},
  {path:'',pathMatch:'full' ,component:AppComponent}]*/
  const routes:Routes=[
    {path:'',pathMatch:'full',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'book',component:BookComponent},
    {path:'animal', component:AnimalListComponent},
    {path:'animal/:id',component:AnimalDetailComponent}
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
