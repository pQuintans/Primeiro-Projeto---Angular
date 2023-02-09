import { Component, EventEmitter, Output } from '@angular/core';

export interface Pessoa {
  nome: string,
  idade: number
}

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  // Output é um decorator que permite que o componente filho envie dados para o componente pai
  // EventEmitter é uma classe que permite que o componente filho envie dados para o componente pai
  // O método emit() é responsável por enviar o dado para o componente pai

  @Output() public enviarDados = new EventEmitter();

  public pessoas: Pessoa[] = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 19 },
    { nome: 'Pedro', idade: 21 },
    { nome: 'Ana', idade: 22 }
  ]

  public getDados(event: number): void {
    this.enviarDados.emit(this.pessoas[event])
  }
}
