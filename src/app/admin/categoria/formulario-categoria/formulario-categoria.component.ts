import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.scss']
})
export class FormularioCategoriaComponent {

  public id: any;
  public categoria: Categoria;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param categoriaService
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.categoriaService.getCategoria(this.id).subscribe(
        response => {
          this.categoria = response.content;
        },
        error => console.log(error.mensagem)
      );
    }
  }
}
