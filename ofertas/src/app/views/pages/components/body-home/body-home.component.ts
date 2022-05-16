import { OfertasService } from 'src/app/core/services/ofertas.service'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-body-home',
  templateUrl: './body-home.component.html',
  styleUrls: ['./body-home.component.scss']
})
export class BodyHomeComponent implements OnInit {
  itemsList: any[] = []
  hotelList: any[] = []
  restauranteList: any[] = []
  entretenimentoList: any[] = []

  constructor(
    private router: Router,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.getList()
  }

  getList() {
    this.ofertasService.getList().subscribe((item) => {
      if (item !== null && item.length > 0) {
        this.itemsList = item
        this.itemsList.find(i => {
          if (i.categoria.nome === 'Hotel') {
            this.hotelList.push(i)
          } else if (i.categoria.nome === 'Restaurante') {
            this.restauranteList.push(i)
          } else {
            this.entretenimentoList.push(i)
          }
        })
      }
    })
  }

  goTo(id: number) {
    if (id !== null && id !== 0) {
      this.router.navigate(['/product/' + id])
    }
  }

  buyTo(item: any) {
    this.router.navigate(['/checkout', item])
  }

}
