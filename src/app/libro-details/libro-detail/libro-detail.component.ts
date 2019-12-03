import { Component, OnInit } from '@angular/core';
import { LibroDetailService } from 'src/app/shared/libro-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styles: []
})
export class LibroDetailComponent implements OnInit {

  constructor(private service: LibroDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Id: 0,
      Nombre_Libro: "",
      AutorId:0,
      Autor: null,
      CategoriaId: 0,
      Categoria: null,
      ISBN: ""
    }
  }

  onSubmit(form: NgForm) {
    debugger;
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.getLibroDetailName().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Enviado satisfactoriamente', 'Detalle Registro Libro')
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putLibroDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Enviado satisfactoriamente', 'Detalle Registro Libro');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}