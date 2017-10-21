import { Categoria } from '../categoria/categoria';

export class Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  categoria: Categoria;
}
