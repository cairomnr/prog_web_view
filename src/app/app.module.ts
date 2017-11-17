import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { HomeModule } from '../app/home/home.module';
import { AdminModule } from '../app/admin/admin.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    AdminModule,
    ToastrModule,
    BrowserModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
