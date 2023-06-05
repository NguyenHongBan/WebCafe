import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../services/drink/drink.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods:string='';
  constructor(private fs:DrinkService){}
  ngOnInit(): void {
    
  }

}
