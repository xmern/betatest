import { Component, OnInit } from '@angular/core';
import { carDto } from '../interfaces/Car';
import { HttpGatewayService } from '../http-gateway.service';
import { weatherForecastDto } from '../interfaces/weather';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.css'
})
export class AllCarsComponent implements OnInit {
  loadingData:boolean
  allCars:carDto[]
  weatherForecasts:weatherForecastDto[]
  constructor(private httpGate:HttpGatewayService){
    this.loadingData = true
    this.allCars = []
    this.weatherForecasts = []
  }
  ngOnInit(): void {
    this.httpGate.get<weatherForecastDto[]>("WeatherForecast/").subscribe(
      {
      next:(response) =>{
        this.weatherForecasts = response
      },
      error:(error)=>{

      }
    }
    )
  }
  

}
