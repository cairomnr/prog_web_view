import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ToastrService } from 'ngx-toastr';
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
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produto = new Produto();
    this.produto.id = 0;
    this.produto.isDestaque = true;
    this.produto.categoria = new Categoria();
    this.produto.categoria.id = 0;
  }

  ngOnInit() {
    this.categoriaService
      .getCategorias()
      .subscribe(
        response => {
          this.categorias = response.content;
          const id = this.route.snapshot.paramMap.get('id');
          if (id != null) { this.carregarProduto(id); }
        },
        error => {
          this.toast.error(error);
        }
      );
  }

  /**
   * Carrega o produto para alteração se existir.
   */
  public carregarProduto(id): void {
    this.produtoService
    .getProduto(id)
    .subscribe(
      response => {
        this.produto = response.content;
      },
      error => {
        this.toast.error(error);
      }
    );
  }

  /**
   * Método responsável por adicionar um novo produto no sistema.
   */
  public salvarProduto(produtoForm: any): void {
    if (produtoForm.valid) {
      const produto = produtoForm.value;
      produto.categoria = new Categoria(produto.categoria);

      this.produtoService.salvarProduto(produto, produto.id).subscribe(
        response => {
          this.toast.success(response.messages.SUCCESS[0]);
          this.redirecionaListagemProdutos();
        },
        error => {
          this.toast.error(error);
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

  /**
   * Verifica se a categoria é a categoria vinculada ao produto.
   *
   * @param categoria
   * @return boolean
   */
  public isCategoriaProduto(categoria: Categoria): boolean {
    console.log(categoria.id === this.produto.categoria.id)
    return categoria.id === this.produto.categoria.id;
  }
}
