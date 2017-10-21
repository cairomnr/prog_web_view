import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-visualizar-produto',
  templateUrl: './visualizar-produto.component.html',
  styleUrls: ['./visualizar-produto.component.scss']
})
export class VisualizarProdutoComponent implements OnInit {

  public id: any;
  public produto: Produto;

  /**
   * Construtor da classe.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  /**
   * Método executado quando o componente começar a renderização.
   */
  ngOnInit() {
    this.produtoService.getProduto(this.id).subscribe(
      response => { this.produto = response.content; },
      error => console.log(error)
    );
  }

}
