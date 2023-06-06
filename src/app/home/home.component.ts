import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../services/drink/drink.service';
import { Drink } from '../shared/models/drink';
import { StaRatingComponent} from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  drink:Drink []=[];
  constructor(private ds:DrinkService, private route:ActivatedRoute){}

  ngOnInit(): void {
   this.route.params.subscribe(param =>{
     if(param['searchItem'])
     this.drink = this.ds.getALll().filter(drink =>drink.ten.toLocaleLowerCase().includes(param['searchItem'].toLocaleLowerCase()))
     else
     this.drink = this.ds.getALll();
   }) 
  }

}
