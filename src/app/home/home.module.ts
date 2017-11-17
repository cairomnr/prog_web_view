import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { CategoriaProdutosComponent } from './categoria-produtos/categoria-produtos.component';

import { CategoriaProdutosResolve } from './categoria-produtos/resolve/categoria-produtos.resolve';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ],
  declarations: [HomeComponent, DestaqueComponent, CategoriaProdutosComponent],
  providers: [
    CategoriaProdutosResolve
  ]
})
export class HomeModule { }
