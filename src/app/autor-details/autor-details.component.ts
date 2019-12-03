import { Component, OnInit } from '@angular/core';
import { AutorDetailService } from 'src/app/shared/autor-detail.service';

@Component({
  selector: 'app-autor-details',
  templateUrl: './autor-details.component.html',
  styles: []
})
export class AutorDetailsComponent implements OnInit {

  constructor(private service: AutorDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }
}

