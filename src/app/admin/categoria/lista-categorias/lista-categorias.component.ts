import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private categoriaService: CategoriaService, private toast: ToastrService) {
    this.categoriaService.getCategorias().subscribe(response => {
      this.categorias = response.content;
    }, error => this.toast.error(error));
  }

  /**
   * Deleta uma categoria cadastrada no sistema.
   *
   * @param id
   */
  deletarCategoria(id: number, index: number): void {
    if (id != null) {
      this.categoriaService.excluir(id).subscribe(response => {
        this.toast.success(response.messages.SUCCESS[0]);
        this.categorias.splice(index, 1);
      }, error => { this.toast.error(error); });
    } else {
      this.toast.error('Falha ao remover categoria.');
    }
  }
}
