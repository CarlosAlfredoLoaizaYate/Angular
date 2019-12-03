import { Component, OnInit } from '@angular/core';
import { LibroDetailService } from 'src/app/shared/libro-detail.service';
import { ToastrService } from 'ngx-toastr';
import { LibroDetail } from 'src/app/shared/libro-detail.model';


@Component({
  selector: 'app-libro-detail-list',
  templateUrl: './libro-detail-list.component.html',
  styles: []
})
export class LibroDetailListComponent implements OnInit {

  constructor(private service: LibroDetailService,
    private toastr: ToastrService) { }

    ngOnInit() {
      this.service.refreshList();
    }
    populateForm(pd: LibroDetail) {
      this.service.formData = Object.assign({}, pd);
    }

    onDelete(id) {
      if (confirm('Esta seguro que desea eliminarlo ?')) {
        this.service.deleteLibroDetail(id)
          .subscribe(res => {
            debugger;
            this.service.refreshList();
            this.toastr.warning('Eliminacion satisfactoria', 'libro detalle registro');
          },
            err => {
              debugger;
              console.log(err);
            })
      }
    }
 }
 

