import { Injectable } from '@angular/core';
import { AutorDetail } from './autor-detail.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AutorDetailService {
  formData: AutorDetail;
  readonly rootURL = 'http://localhost:1032/api'
  list : AutorDetail[];

  constructor(private http: HttpClient) { }

  postAutorDetail() {
    return this.http.post(this.rootURL + '/Autor', this.formData);
  }
  putAutorDetail() {
    return this.http.put(this.rootURL + '/Autor/'+ this.formData.Id, this.formData);
  }
  deleteAutorDetail(id) {
    return this.http.delete(this.rootURL + '/Autor/'+ id);
  }
  refreshList(){
    this.http.get(this.rootURL + '/Autor')
    .toPromise()
    .then(res => this.list = res as AutorDetail[]);
  }
}

