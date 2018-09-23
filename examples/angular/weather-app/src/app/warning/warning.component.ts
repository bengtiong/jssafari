import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  faExclamationTriangle = faExclamationTriangle;
  Weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather()
      .subscribe((data) => this.Weather = data);
  }

}
