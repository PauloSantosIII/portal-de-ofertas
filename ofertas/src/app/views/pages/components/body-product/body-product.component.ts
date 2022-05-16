import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Product } from 'src/app/core/services/models/product'
import { OfertasService } from 'src/app/core/services/ofertas.service'

@Component({
  selector: 'app-body-product',
  templateUrl: './body-product.component.html',
  styleUrls: ['./body-product.component.scss']
})
export class BodyProductComponent implements OnInit {
  productId: number = 1
  product!: Product
  titulo: string = ''

  constructor(
    private ofertasService: OfertasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ofertasService.getProduct(this.productId).subscribe((retorno) => {
      this.product = retorno
      console.log(this.product)
    })
  }

  buyTo(item: any) {
    this.router.navigate(['/checkout', item])
  }

}
