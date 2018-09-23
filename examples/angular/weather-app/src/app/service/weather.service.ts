import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  mockWeatherURL = 'assets/mockserver.json';

  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get(this.mockWeatherURL);
  }
}
