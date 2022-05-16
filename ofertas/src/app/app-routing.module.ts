import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BodyProductComponent } from './views/pages/components/body-product/body-product.component'
import { BodyCheckoutComponent } from './views/pages/components/body-checkout/body-checkout.component'
import { BodyHomeComponent } from './views/pages/components/body-home/body-home.component'

const routes: Routes = [
  { path: '', component: BodyHomeComponent },
  { path: 'product/:id', component: BodyProductComponent },
  { path: 'checkout', component: BodyCheckoutComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
