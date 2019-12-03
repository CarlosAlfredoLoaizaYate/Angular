import { Component, OnInit } from '@angular/core';
import { AutorDetailService } from 'src/app/shared/autor-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-autor-detail',
  templateUrl: './autor-detail.component.html',
  styles: []
})
export class AutorDetailComponent implements OnInit {

  constructor(private service: AutorDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Id: 0,
      Nombre: "",
      Apellidos: "",
      Fecha_Nacimiento: null
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postAutorDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Enviado satisfactoriamente', 'Detalle Registro Autor')
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putAutorDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Enviado satisfactoriamente', 'Detalle Registro Autor');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}

