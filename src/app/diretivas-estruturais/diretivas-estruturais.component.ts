import { Component, OnInit } from '@angular/core';

interface IList {
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<IList> = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 22  },
    { nome: 'José', idade: 21  },
    { nome: 'Pedro', idade: 40  },
    { nome: 'Paulo', idade: 10  }
  ]

  public nome: string = ''

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition
    }, 2000)
  }

  public onClick(): void {
    this.conditionClick = !this.conditionClick
  }

  public onClickAddList(): void {
    this.list.push({ nome: 'Novo nome', idade: 99 })
  }

  public onClickEventList(index: number): void {
    this.list.splice(index, 1)
  }
}
