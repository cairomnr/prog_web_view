import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsModule } from 'angular-alert-module';

import { AdminRoutingModule } from './admin-routing.module';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';

import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutoModule,
    CategoriaModule,
    AdminRoutingModule,
    AlertsModule.forRoot()
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
