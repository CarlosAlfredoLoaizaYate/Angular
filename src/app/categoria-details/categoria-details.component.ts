import { Component, OnInit } from '@angular/core';
import { CategoriaDetailService } from '../shared/categoria-detail.service';

@Component({
  selector: 'app-categoria-details',
  templateUrl: './categoria-details.component.html',
  styles: []
})
export class CategoriaDetailsComponent implements OnInit {

  constructor(private service:CategoriaDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
