import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

import { CategoriaDetailService } from './shared/categoria-detail.service';
import { AutorDetailService } from './shared/autor-detail.service';
import { LibroDetailService } from './shared/libro-detail.service';

import { CategoriaDetailsComponent } from './categoria-details/categoria-details.component';
import { CategoriaDetailComponent } from './categoria-details/categoria-detail/categoria-detail.component';
import { CategoriaDetailListComponent } from './categoria-details/categoria-detail-list/categoria-detail-list.component';

import { AutorDetailsComponent } from './autor-details/autor-details.component';
import { AutorDetailComponent } from './autor-details/autor-detail/autor-detail.component';
import { AutorDetailListComponent } from './autor-details/autor-detail-list/autor-detail-list.component';

import { LibroDetailsComponent } from './libro-details/libro-details.component';
import { LibroDetailComponent } from './libro-details/libro-detail/libro-detail.component';
import { LibroDetailListComponent } from './libro-details/libro-detail-list/libro-detail-list.component';
import { LibroDetailListnombreComponent } from './libro-details/libro-detail-listnombre/libro-detail-listnombre.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaDetailsComponent,
    CategoriaDetailComponent,
    CategoriaDetailListComponent,
    AutorDetailsComponent,
    AutorDetailComponent,
    AutorDetailListComponent,
    LibroDetailsComponent,
    LibroDetailComponent,
    LibroDetailListComponent,
    LibroDetailListnombreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CategoriaDetailService,AutorDetailService,LibroDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
