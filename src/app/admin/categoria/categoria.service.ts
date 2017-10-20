import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Categoria } from './categoria';

@Injectable()
export class CategoriaService {

  public URL_API = 'localhost:8080/';

  public getCategorias(): any {
    return null;
  }

}
