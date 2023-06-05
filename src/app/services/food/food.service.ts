import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return[
      '/assets/anh1.jpg',
      '/assets/anh2.jpg',
      '/assets/anh3.jpg',
      '/assets/anh4.jpg',
      '/assets/anh5.jpg',
    ]
  }
}
