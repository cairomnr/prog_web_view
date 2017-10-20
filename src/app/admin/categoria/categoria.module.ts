import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { FormularioCategoriaComponent } from './formulario-categoria/formulario-categoria.component';
import { VisualizarCategoriaComponent } from './visualizar-categoria/visualizar-categoria.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ],
  declarations: [ListaCategoriasComponent, FormularioCategoriaComponent, VisualizarCategoriaComponent]
})
export class CategoriaModule { }
