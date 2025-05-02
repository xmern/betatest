import { Component } from '@angular/core';
import { carDto } from '../interfaces/Car';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.css'
})
export class AllCarsComponent {
  loadingData:boolean
  allCars:carDto[]
  constructor(){
    this.loadingData = true
    this.allCars = []
  }

}
