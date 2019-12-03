import { Component, OnInit } from '@angular/core';
import { CategoriaDetailService } from 'src/app/shared/categoria-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categoria-detail',
  templateUrl: './categoria-detail.component.html',
  styles: []
})
export class CategoriaDetailComponent implements OnInit {

  constructor(private service: CategoriaDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Id: 0,
      Nombre: "",
      Descripcion: ""
    }
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postCategoriaDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Enviado satisfactoriamente', 'Detalle Registro Categoria')
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putCategoriaDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Enviado satisfactoriamente', 'Detalle Registro Categoria');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
