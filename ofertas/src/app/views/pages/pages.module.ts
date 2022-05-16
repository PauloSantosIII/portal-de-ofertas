import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BodyHomeComponent } from './components/body-home/body-home.component'
import { HeaderComponent } from './components/header/header.component'
import { BodyCheckoutComponent } from './components/body-checkout/body-checkout.component'
import { BodyProductComponent } from './components/body-product/body-product.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    BodyCheckoutComponent,
    BodyHomeComponent,
    BodyProductComponent,
    HeaderComponent
  ]
})
export class PagesModule { }
