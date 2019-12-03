import { Component, OnInit } from '@angular/core';
import { AutorDetailService } from 'src/app/shared/autor-detail.service';
import { ToastrService } from 'ngx-toastr';
import { AutorDetail } from 'src/app/shared/autor-detail.model';

@Component({
  selector: 'app-autor-detail-list',
  templateUrl: './autor-detail-list.component.html',
  styles: []
})
export class AutorDetailListComponent implements OnInit {

  constructor(private service: AutorDetailService,
    private toastr: ToastrService) { }

    ngOnInit() {
      this.service.refreshList();
    }
    populateForm(pd: AutorDetail) {
      this.service.formData = Object.assign({}, pd);
      this.service.formData.Fecha_Nacimiento = this.service.formData.Fecha_Nacimiento.substring(0,10);

    }

    onDelete(id) {
      if (confirm('Esta seguro que desea eliminarlo ?')) {
        this.service.deleteAutorDetail(id)
          .subscribe(res => {
            debugger;
            this.service.refreshList();
            this.toastr.warning('Eliminacion satisfactoria', 'autor detalle registro');
          },
            err => {
              debugger;
              console.log(err);
            })
      }
    }
 }
 

