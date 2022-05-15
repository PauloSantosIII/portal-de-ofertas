import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PagesComponent],
  declarations: [PagesComponent]
})
export class PagesModule { }
