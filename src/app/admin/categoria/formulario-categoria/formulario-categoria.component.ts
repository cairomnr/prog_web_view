import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';

import { Categoria } from '../categoria';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.scss']
})
export class FormularioCategoriaComponent {
  public id: any;
  public categoria: Categoria;
  public categoriaForm: FormGroup;

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
    private categoriaService: CategoriaService,
    private toast: ToastrService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.categoria = new Categoria();

    if (this.id != null) {
      this.categoriaService.getCategoria(this.id).subscribe(
        response => {
          this.categoria = response.content;
        },
        error => console.log(error.mensagem)
      );
    }
  }

  /**
   * Salva uma nova categoria no sistema.
   *
   * @param categoriaForm
   */
  public salvarCategoria(categoriaForm: any): void {
    if (categoriaForm.valid) {
      const categoria = categoriaForm.value;
      this.categoriaService.salvarCategoria(categoria, categoria.id).subscribe(
      response => {
        this.toast.success(response.messages.SUCCESS[0]);
        this.voltarListagemCategoria();
      },
      error => {
        this.toast.error(error);
      });
    }
  }

  /**
   * Retorna para a tela de listagem de categoria.
   */
  public voltarListagemCategoria(): void {
    this.router.navigate(['/admin/categoria']);
  }
}
