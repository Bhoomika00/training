import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { ProductaddComponent } from './products/productadd/productadd.component';


const routes: Routes = [
  {path:'events/:id',component:EventDetailComponent},
  {path:'addProduct',component:ProductaddComponent},
  {path:'',pathMatch:'full' ,component:AppComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
