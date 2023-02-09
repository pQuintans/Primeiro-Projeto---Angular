import { Component, OnInit } from '@angular/core';
import { Pessoa } from './shared/output/output.component';

@Component({
  selector: 'app-root',
  template: `
    <!--<app-data-binding></app-data-binding> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->

    <!-- <app-diretivas-atributos>
      <h1>Aulas de Diretivas de Atributos</h1>
      <h2>Final da Aula</h2>
    </app-diretivas-atributos> -->

    <!-- <app-diretivas-atributos></app-diretivas-atributos>
    <app-new-component></app-new-component> -->

    <!-- <app-input [contador]="addValue"></app-input>
    <br>
    <button (click)="add()">Add</button> -->

    <ng-template [ngIf]="pessoa">
      <h1>{{pessoa.nome}}</h1>
      <h2>{{pessoa.idade}}</h2>
    </ng-template>
    <app-output (enviarDados)="setPessoa($event)"></app-output>

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  public addValue: number = 10;

  public pessoa: Pessoa | undefined;

  constructor() {}

  ngOnInit(): void {
  }

  public add(): void {
    this.addValue++;
  }

  public setPessoa(dados: Pessoa): void {
    this.pessoa = dados;
  }
}
