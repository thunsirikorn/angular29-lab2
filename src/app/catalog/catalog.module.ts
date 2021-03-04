import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module'
import { from } from 'rxjs';
import { BackendService } from '../backend.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule, AppModule
  ],
  providers: [BackendService]
})
export class CatalogModule { }
