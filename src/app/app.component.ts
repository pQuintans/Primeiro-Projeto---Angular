import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--<app-data-binding></app-data-binding> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->

    <!-- <app-diretivas-atributos>
      <h1>Aulas de Diretivas de Atributos</h1>
      <h2>Final da Aula</h2>
    </app-diretivas-atributos> -->

    <app-diretivas-atributos></app-diretivas-atributos>
    <app-new-component></app-new-component>

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
