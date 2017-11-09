import { Component, OnInit } from '@angular/core';

import { Produto } from '../../admin/produto/produto';
import { ProdutoService } from '../../admin/produto/produto.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.scss']
})
export class DestaqueComponent implements OnInit {
  public produtos: Produto[];

  /**
   * Construtor da classe.
   *
   * @param produtoService
   */
  constructor(
    private produtoService: ProdutoService
  ) {}

  /**
   * Quando o componente estiver carregando.
   */
  ngOnInit() {
    this.produtoService.getProdutos().subscribe(
      response => {
        console.log(response);
        this.produtos = response.content;
      },
      error => {
        console.log(error);
      }
    );
  }
}
