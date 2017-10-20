import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from '../app/home/home.module';
import { AdminModule } from '../app/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    AdminModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
