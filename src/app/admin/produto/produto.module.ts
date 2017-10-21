import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { FormularioProdutoComponent } from './formulario-produto/formulario-produto.component';
import { VisualizarProdutoComponent } from './visualizar-produto/visualizar-produto.component';

import { ProdutoService } from './produto.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ListaProdutosComponent,
    FormularioProdutoComponent,
    VisualizarProdutoComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }
