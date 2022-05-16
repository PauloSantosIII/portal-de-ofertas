import { OfertasService } from 'src/app/core/services/ofertas.service'
import { Component, OnInit } from '@angular/core'

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

  constructor(private ofertasService: OfertasService) { }

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

}
