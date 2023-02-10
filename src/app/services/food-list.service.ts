import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: string[] = ['Pizza', 'Hamburguer', 'Coxinha', 'Pastel']

  constructor() { }

  public getFoodList() {
    return this.list;
  }

  public addFoodList(value: string) {
    this.foodListAlert(value);
    this.list.push(value);
  }

  public foodListAlert(valor: string) {
    return this.emitEvent.emit(valor)
  }
}
