import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  url: string = 'http://localhost:3004'

  constructor(protected http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get<Observable<any>>(this.url + '/ofertas')
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<Observable<any>>(this.url + '/ofertas/' + id)
  }

}
