import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  Weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather()
      .subscribe((data) => this.Weather = data);
  }

}
