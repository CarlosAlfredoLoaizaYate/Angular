import { Component, OnInit } from '@angular/core';
import { LibroDetailService } from 'src/app/shared/libro-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { stringify } from 'querystring';

@Component({
  selector: 'app-libro-detail-listnombre',
  templateUrl: './libro-detail-listnombre.component.html',
  styles: []
})
export class LibroDetailListnombreComponent implements OnInit {

  constructor(private service: LibroDetailService, private toastr: ToastrService) { }

  ngOnInit() {

  }
  // onSubmit(form: NgForm) {
  //   debugger;
  //   if (this.service.formData.Nombre_Libro.trim().length > 0) {
  //     this.service.getLibroDetailName.subscribe(
  //       res => {
  //         debugger;
  //         this.resetForm(form);
  //         this.toastr.success('Enviado satisfactoriamente', 'Resgistro Detalle Libro')
  //         this.service.refreshList();
  //       },
  //       err => {
  //         debugger;
  //         console.log(err);
  //       }
  //     )
  //   }
  // }
}

