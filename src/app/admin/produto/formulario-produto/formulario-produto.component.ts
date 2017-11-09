import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { AlertsService } from 'angular-alert-module';
import { Categoria } from '../../categoria/categoria';
import { CategoriaService } from '../../categoria/categoria.service';

@Component({
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.component.html',
  styleUrls: ['./formulario-produto.component.scss']
})
export class FormularioProdutoComponent implements OnInit {

  public produto: Produto;
  public categorias: Categoria[];

  /**
   * Construtor da classe.
   *
   * @param produtoService
   * @param categoriaService
   * @param alert
   * @param router
   * @param route
   */
  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alert: AlertsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produto = new Produto();
    this.produto.id = 0;
    this.produto.categoria = new Categoria();
  }

  ngOnInit() {
    this.categoriaService
      .getCategorias()
      .subscribe(
        response => {
          this.categorias = response.content;
        },
        error => this.alert.setMessage(error.message, 'error')
      );

      const id = this.route.snapshot.paramMap.get('id');
      if (id != null) { this.carregarProduto(id); }
  }

  /**
   * Carrega o produto para alteração se existir.
   */
  public carregarProduto(id): void {

    this.produtoService
    .getProduto(id)
    .subscribe(
      response => this.produto = response.content,
      error => this.alert.setMessage(error.message, 'error')
    );
  }

  /**
   * Método responsável por adicionar um novo produto no sistema.
   */
  public salvarProduto(produtoForm: any): void {
    if (produtoForm.valid) {
      const produto = produtoForm.value;
      this.produtoService.salvarProduto(produto, produto.id).subscribe(
        response => {
          this.alert.setMessage(response.messages.SUCCESS[0], 'success');
          this.redirecionaListagemProdutos();
        },
        error => {
          this.alert.setMessage(error.message, 'error');
        }
      );
    }
  }

  /**
   * Redireciona o usuário para tela de produtos.
   */
  public redirecionaListagemProdutos(): void {
    this.router.navigate(['/admin/produto']);
  }
}
