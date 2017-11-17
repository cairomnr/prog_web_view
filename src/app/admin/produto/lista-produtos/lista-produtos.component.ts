import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {
  public produtos: Produto[];

  /**
   * Construtor da classe.
   */
  constructor(private produtoService: ProdutoService, private toast: ToastrService) {}

  /**
   * Quando o componente inicializar.
   */
  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(response => {
      this.produtos = response.content;
    }, error => this.toast.error('Produto', error));
  }

  /**
   * Deleta um produto cadastrado no sistema.
   */
  deletarProduto(id: number, index: number): void {
    if (id != null) {
      this.produtoService.excluir(id).subscribe(response => {
        this.toast.success(response.messages.SUCCESS[0]);
        this.produtos.splice(index, 1);
      }, error => {
        this.toast.error(error);
      });
    } else {
      this.toast.error('Falha ao remover produto.');
    }
  }
}
