import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { FormularioProdutoComponent } from './formulario-produto/formulario-produto.component';
import { VisualizarProdutoComponent } from './visualizar-produto/visualizar-produto.component';

import { ProdutoService } from './produto.service';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    ListaProdutosComponent,
    FormularioProdutoComponent,
    VisualizarProdutoComponent
  ],
  providers: [
    ProdutoService,
    ToastrService
  ]
})
export class ProdutoModule { }
