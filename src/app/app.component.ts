import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Hello World" *ngIf="mustRender"></app-title>
    <button (click)="destroyComponent()">Destruir App Title</button>
    <br><br>

    {{ valor }}
    <button (click)="adicionar()">Adicionar</button>

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  public valor: number = 1
  public mustRender: boolean = true;

  constructor() {}

  public adicionar(): number {
    return this.valor++
  }

  public destroyComponent() {
    this.mustRender = false;
  }

  ngOnInit(): void {
    // console.log(1)
  }

  ngDoCheck(): void {
    // console.log('doCheck')
  }

  ngAfterContentInit(): void {
    // console.log('AfterContentInit')
  }

  ngAfterContentChecked(): void {
    // console.log('afterContentChecked')
  }

  ngAfterViewInit(): void {
    // console.log('afterViewInit')
  }

  ngAfterViewChecked(): void {
    // console.log('afterViewChecked')
  }
}
