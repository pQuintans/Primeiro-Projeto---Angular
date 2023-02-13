import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: string[] = ['Pizza', 'Hamburguer', 'Coxinha', 'Pastel']

  private httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  // public getFoodList() {
  //   return this.list;
  // }

  public getFoodList(): Observable<FoodList[]> {
    return this.http.get<FoodList[]>(`${this.url}/food-list`).pipe(
            res => res,
            error => error
          )
  }

  // public addFoodList(value: string) {
  //   this.foodListAlert(value);
  //   this.list.push(value);
  // }

  public addFoodList(value: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}/food-list`, { nome: value }).pipe(
      res => res,
      error => error
    )
  }

  public foodListEdit(value: string, id: number): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.url}/food-list/${id}`, { nome: value }).pipe(
      res => res,
      error => error
    )
  }

  public foodListDelete(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}/food-list/${id}`).pipe(
      res => res,
      error => error
    )
  }

  // public foodListAlert(valor: string) {
  //   return this.emitEvent.emit(valor)
  // }

  public foodListAlert(valor: FoodList) {
    return this.emitEvent.emit(valor)
  }
}
