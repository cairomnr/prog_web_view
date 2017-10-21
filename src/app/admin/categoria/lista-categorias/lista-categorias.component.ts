import { Component } from '@angular/core';
import { AlertsService } from 'angular-alert-module';

import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.scss']
})
export class ListaCategoriasComponent {

  public categorias: Categoria[];

  /**
   * Construtor da classe.
   *
   * @param categoriaService
   */
  constructor(private categoriaService: CategoriaService, private alert: AlertsService) {
    this.categoriaService.getCategorias().subscribe(response => {
      this.categorias = response.content;
    }, error => this.alert.setMessage(error.mensagem, 'error'));
  }

  /**
   * Deleta uma categoria cadastrada no sistema.
   *
   * @param id
   */
  deletarCategoria(id: number): void {
    if (id != null) {
      this.categoriaService.excluir(id).subscribe(response => {
        this.alert.setMessage(response.mensagem, 'success');
      }, error => { this.alert.setMessage(error.mensagem, 'error'); });
    } else {
      this.alert.setMessage('Falha ao remover categoria.', 'error');
    }
  }
}
