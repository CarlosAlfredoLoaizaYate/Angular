import { Injectable } from '@angular/core';
import { CategoriaDetail } from './categoria-detail.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class CategoriaDetailService {
  formData: CategoriaDetail;
  readonly rootURL = 'http://localhost:1032/api'
  list : CategoriaDetail[];

  constructor(private http: HttpClient) { }

  postCategoriaDetail() {
    return this.http.post(this.rootURL + '/Categoria', this.formData);
  }

  putCategoriaDetail() {
    return this.http.put(this.rootURL + '/Categoria/'+ this.formData.Id, this.formData);
  }
  deleteCategoriaDetail(id) {
    return this.http.delete(this.rootURL + '/Categoria/'+ id);
  }
  refreshList(){
    this.http.get(this.rootURL + '/Categoria')
    .toPromise()
    .then(res => this.list = res as CategoriaDetail[]);
  }
}
