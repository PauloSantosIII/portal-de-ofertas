import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PagesComponent } from './pages.component'
import { BodyHomeComponent } from './components/body-home/body-home.component'
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PagesComponent],
  declarations: [
    BodyHomeComponent,
    HeaderComponent,
    PagesComponent
  ]
})
export class PagesModule { }
