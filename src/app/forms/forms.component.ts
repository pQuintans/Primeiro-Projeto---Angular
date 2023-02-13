import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public listComidas: {comida: string, preco: number}[] = [
    {comida: 'Coca-Cola', preco: 10},
    {comida: 'Chocolates', preco: 11},
    {comida: 'Pepsi', preco: 12},
    {comida: 'Pasta', preco: 10},
  ]

  public submitForm(form: NgForm): void {
    console.log(form.value)
  }
}
