import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CategoriaService } from './categoria.service';

import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { FormularioCategoriaComponent } from './formulario-categoria/formulario-categoria.component';
import { VisualizarCategoriaComponent } from './visualizar-categoria/visualizar-categoria.component';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    ListaCategoriasComponent,
    FormularioCategoriaComponent,
    VisualizarCategoriaComponent
  ],
  providers: [
    CategoriaService
  ]
})
export class CategoriaModule {}
