import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoriaModule } from './categoria/categoria.module';

@NgModule({
  imports: [
    CommonModule,
    CategoriaModule,
    AdminRoutingModule
  ],
  declarations: []
})
export class AdminModule { }
