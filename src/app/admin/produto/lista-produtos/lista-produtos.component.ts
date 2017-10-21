import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'angular-alert-module';

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
  constructor(private produtoService: ProdutoService, private alert: AlertsService) {}

  /**
   * Quando o componente inicializar.
   */
  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(response => {
      this.produtos = response.content;
    }, error => this.alert.setMessage(error.mensagem, 'error'));
  }

  /**
   * Deleta um produto cadastrado no sistema.
   */
  deletarProduto(id: number, index: number): void {
    if (id != null) {
      this.produtoService.excluir(id).subscribe(response => {
        console.log(response)
        this.alert.setMessage(response.messages.SUCCESS[0], 'success');
        this.produtos.splice(index, 1);
      }, error => {
        this.alert.setMessage(error.mensagem, 'error');
      });
    } else {
      this.alert.setMessage('Erro ao remover produto.', 'error');
    }
  }
}
