import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../services/drink/drink.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  drink:string[]=[];
  constructor(private dr:DrinkService){}

  ngOnInit(): void {
   this.drink = this.dr.getALll();
  }

}
