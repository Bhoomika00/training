import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangerRoutingModule } from './manger-routing.module';
//import { ManagerHomeComponent } from './manager-home/manager-home.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './navigation/navigation.component';
import { MangerHomeComponent } from './manager-home/manger-home.component';
import { UserMangementComponent } from './user-management/user-mangement.component';



@NgModule({
  declarations: [
    //MangerManagerHomeComponent,
    NavigationComponent,
    MangerHomeComponent,
    UserMangementComponent
  ],
  imports: [
    CommonModule,
    MangerRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class ManagerModule { }
