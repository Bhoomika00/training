import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnimalListComponent } from './animals/animal-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './star/star.component';
import { CartComponent } from './cart/cart.component';
import { RepeatDataPipe } from './repeat-data.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { InmemoryeventService } from 'shared/inmemoryevent.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { ProductaddComponent } from './products/productadd/productadd.component';
import { StarIconDirective } from './star-icon.directive';

import { EmpformComponent } from './forms/empform.component';
import { TrusteeComponent } from './forms/trustee/trustee.component';
import { BookComponent } from './forms/books/book.component';

@NgModule({
  declarations: [
    AppComponent,
    PenthouseComponent,
    WelcomeComponent,
    AnimalListComponent,
    ProductListComponent,
    StarComponent,
    CartComponent,
    RepeatDataPipe,
    NavbarComponent,
    EventListComponent,
    EventDetailComponent,
    ProductaddComponent,
    StarIconDirective,
    
    EmpformComponent,
    TrusteeComponent,
    BookComponent
  ],
  imports: [
    BrowserModule, FormsModule,   HttpClientModule, ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InmemoryeventService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
