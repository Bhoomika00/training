import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from 'src/app/products/product-list.component';
//import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserMangementComponent } from './user-management/user-mangement.component';

const routes: Routes = [ 
  {path:'user',component:UserMangementComponent},
  {path:'Managerproducts',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangerRoutingModule { }
