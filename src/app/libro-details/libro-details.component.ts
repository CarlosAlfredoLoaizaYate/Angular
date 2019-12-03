import { Component, OnInit } from '@angular/core';
import { LibroDetailService } from 'src/app/shared/libro-detail.service';

@Component({
  selector: 'app-libro-details',
  templateUrl: './libro-details.component.html',
  styles: []
})
export class LibroDetailsComponent implements OnInit {

  constructor(private service: LibroDetailService) { }

  ngOnInit() {
    this.service.refreshList();
    this.service.refreshListAutor();
    this.service.refreshListCategoria();
  }

}
