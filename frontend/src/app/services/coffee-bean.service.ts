import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoffeeBean } from '../models/coffee-bean.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeBeanService {
  private apiUrl = 'http://localhost:8080/api/coffee-beans';

  constructor(private http: HttpClient) { }

  getAllCoffeeBeans(): Observable<CoffeeBean[]> {
    return this.http.get<CoffeeBean[]>(this.apiUrl);
  }

  getCoffeeBeanById(id: number): Observable<CoffeeBean> {
    return this.http.get<CoffeeBean>(`${this.apiUrl}/${id}`);
  }

  createCoffeeBean(coffeeBean: CoffeeBean): Observable<CoffeeBean> {
    return this.http.post<CoffeeBean>(this.apiUrl, coffeeBean);
  }

  updateCoffeeBean(id: number, coffeeBean: CoffeeBean): Observable<CoffeeBean> {
    return this.http.put<CoffeeBean>(`${this.apiUrl}/${id}`, coffeeBean);
  }

  updateRating(id: number, rating: number): Observable<CoffeeBean> {
    return this.http.patch<CoffeeBean>(`${this.apiUrl}/${id}/rating`, rating);
  }

  deleteCoffeeBean(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
