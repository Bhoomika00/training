import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnimalListComponent } from './animals/animal-list.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './star/star.component';
import { CartComponent } from './cart/cart.component';
import { RepeatDataPipe } from './repeat-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PenthouseComponent,
    WelcomeComponent,
    AnimalListComponent,
    ProductListComponent,
    StarComponent,
    CartComponent,
    RepeatDataPipe
  ],
  imports: [
    BrowserModule, FormsModule
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
