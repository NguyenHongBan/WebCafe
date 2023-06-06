import { Injectable } from '@angular/core';
import { Drink } from 'src/app/shared/models/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor() { }


  getALll():Drink[]{
    return [
    {
      id :1,
      ten:"Capuchino",
      gia: 34.000,
      YeuThich: false,
      star:4.5,
      tags:['FastDrink','Coffe','breakfast'],
      HinhAnh:'/assets/anh1.jpg',
      ThoiGian:'10-20',
      NguonGoc:['VietNam'],
    }
    ];
  }
}
