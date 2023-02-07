import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public nome: string = 'Pedro'
  public idade: number = 18

  public isDisabled: boolean = true
  public imgSrc: string = 'https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg'
  public imgTitle: string = 'imagem de teste'

  public position: {
    x: number,
    y: number
  } = {
    x: 0,
    y: 0
  }

  public alertaInfo(valor: string): void {
    alert(valor)
  }

  public alertaInfoEvento(valor: MouseEvent): void {
    console.log(valor)
  }

  public mouseMove(valor: MouseEvent): void {
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }
}
