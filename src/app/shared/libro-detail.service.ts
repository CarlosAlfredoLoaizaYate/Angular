import { Injectable } from '@angular/core';
import { LibroDetail } from './libro-detail.model';
import { HttpClient } from '@angular/common/http'
import { AutorDetail } from './Autor-detail.model';
import { CategoriaDetail } from './Categoria-detail.model';


@Injectable({
  providedIn: 'root'
})
export class LibroDetailService {
  formData: LibroDetail;
  readonly rootURL = 'http://localhost:1032/api'
  list : LibroDetail[];
  listAutor : AutorDetail[];
  listCategoria : CategoriaDetail[];

  constructor(private http: HttpClient) { }

  postLibroDetail() {
    return this.http.post(this.rootURL + '/Libro', this.formData);
  }
  putLibroDetail() {
    return this.http.put(this.rootURL + '/Libro/'+ this.formData.Id, this.formData);
  }
  deleteLibroDetail(id) {
    return this.http.delete(this.rootURL + '/Libro/'+ id);
  }
  refreshList(){
    this.http.get(this.rootURL + '/Libro')
    .toPromise()
    .then(res => this.list = res as LibroDetail[]);
  }
  
  refreshListAutor(){
    this.http.get(this.rootURL + '/Autor')
    .toPromise()
    .then(res => this.listAutor = res as AutorDetail[]);
  }
  refreshListCategoria(){
    this.http.get(this.rootURL + '/Categoria')
    .toPromise()
    .then(res => this.listCategoria = res as CategoriaDetail[]);
  }
  getLibroDetailName() {
    return this.http.get(this.rootURL + '/Libro/'+ this.formData.Nombre_Libro);
  }
}

