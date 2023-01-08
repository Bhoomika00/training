import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CartComponent } from './cart/cart.component';
import { RepeatDataPipe } from './repeat-data.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { InmemoryeventService } from 'src/app/shared/inmemoryevent.service';

import { AppRoutingModule } from './app-routing.module';

import { StarIconDirective } from './star-icon.directive';

import { EmpformComponent } from './forms/empform.component';

import { BookComponent } from './forms/books/book.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TrusteeComponent } from './forms/trustee/trustee.component';
import { MenuComponent } from './home/menu.component';
import { LoginComponent } from './user/login.component';
import { ShellComponent } from './home/shell.component';

import { CardListComponent } from './cards/card-list.component';
import { CardComponent } from './cards/card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import {  StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    PenthouseComponent,
    WelcomeComponent,
    //AnimalListComponent,
    //ProductListComponent,
    //StarComponent,
    CartComponent,
    RepeatDataPipe,
    NavbarComponent,
    EventListComponent,
    EventDetailComponent,
    //ProductaddComponent,
    StarIconDirective,
    
    EmpformComponent,
    TrusteeComponent,
    BookComponent,
    HomeComponent,
    AboutComponent,
    //AnimalDetailComponent,
    MenuComponent,
    LoginComponent,
    ShellComponent,
    //AnimalAddComponent,
    CardListComponent,
    CardComponent
    //StudentComponent
  ],
  imports: [
    BrowserModule, FormsModule,   HttpClientModule, ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InmemoryeventService),
    AppRoutingModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
