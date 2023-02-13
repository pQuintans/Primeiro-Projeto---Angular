import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  public foodList: FoodList[] = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.getFoodList().subscribe({
      next: res => this.foodList = res,
      error: err => console.log(err)
    })

    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Você adicionou ${res.nome} na lista de alimentos!`)
        this.foodList.push(res);
      }
    )
  }

  public foodListDelete(id: number) {
    this.foodListService.foodListDelete(id).subscribe({
      next: res => this.foodList = this.foodList.filter(item => item.id !== id),
      error: err => console.log(err)
    })
  }

  public foodListEdit(value: string, id: number) {
    this.foodListService.foodListEdit(value, id).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
  }
}
