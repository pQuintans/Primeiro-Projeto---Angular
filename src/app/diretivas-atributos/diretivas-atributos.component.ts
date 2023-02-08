import { Component, OnInit } from '@angular/core';

interface IList {
  nome: string
}

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true
  public height: string = '20px'
  public backgroundColor: string = 'blue'

  public nome: string = ''

  public list: Array<IList> = [
    { nome: 'Item 1' },
    { nome: 'Item 2' },
    { nome: 'Item 3' },
    { nome: 'Item 4' },
    { nome: 'Item 5' },
  ]

  public date: Date = new Date()

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor
      this.height = this.height == '20px' ? '40px' : '20px'
      this.backgroundColor = this.backgroundColor == 'red' ? 'blue' : 'red'
    }, 2000)
  }

  public salvar(): void {
    this.list.push({nome: this.nome})
    this.nome = ''
  }
}
