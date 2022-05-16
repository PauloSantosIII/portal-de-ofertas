import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-body-checkout',
  templateUrl: './body-checkout.component.html',
  styleUrls: ['./body-checkout.component.scss']
})
export class BodyCheckoutComponent implements OnInit {
  creditCardForm!: FormGroup
  quantidade: number = 1
  unitario: number = 1.50
  produto: string = ''

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.inicializarForm()

    const url = this.router.url.split(';')
    
    this.unitario = Number(url[4].slice(6))
    this.produto = url[2].slice(7).replace('%20', ' ')
  }

  inicializarForm() {
    this.creditCardForm = this.fb.group({
      numero: ['', Validators.compose([
        Validators.required, Validators.minLength(16), Validators.maxLength(16)
      ])],
      nome: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(124)
      ])],
      validade: ['', Validators.compose([
        Validators.required, Validators.minLength(4), Validators.maxLength(4)
      ])],
      codigo: ['', Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(3)
      ])]
    })
  }

  payment() {
    window.alert('Pagamento efetuado')
  }

}
