import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.mudule';

@NgModule({
  declarations: [
    AppComponent,PersonsComponent,PersonInputComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
