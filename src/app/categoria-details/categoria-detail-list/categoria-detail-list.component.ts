import { Component, OnInit } from '@angular/core';
import { CategoriaDetailService } from 'src/app/shared/categoria-detail.service';
import { ToastrService } from 'ngx-toastr';
import { CategoriaDetail } from 'src/app/shared/categoria-detail.model';

@Component({
  selector: 'app-categoria-detail-list',
  templateUrl: './categoria-detail-list.component.html',
  styles: []
})
export class CategoriaDetailListComponent implements OnInit {

  constructor(private service: CategoriaDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd: CategoriaDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(id) {
     if (confirm('Esta seguro que desea eliminarlo?')) {
       this.service.deleteCategoriaDetail(id)
         .subscribe(res => {
           debugger;
           this.service.refreshList();
           this.toastr.warning('Eliminacion satisfactoria', 'Detalle Registro Categoria');
         },
           err => {
             debugger;
             console.log(err);
           })
     }
   }
}
