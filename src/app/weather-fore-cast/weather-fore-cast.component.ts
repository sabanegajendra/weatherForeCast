import { Component } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-weather-fore-cast',
  templateUrl: './weather-fore-cast.component.html',
  styleUrls: ['./weather-fore-cast.component.css']
})
export class WeatherForeCastComponent {
  // cities: string[] = ['Toronto', 'London', 'Paris', 'New York', 'Mumbai'];
  cities: string[] = ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'];
  selectedCity: string = '';
  weatherData: any[] = [];

  constructor(private service: CommonService) {}

  ngOnInit(): void {
    // this.fetchWeatherData();
  }

  fetchWeatherData(){
    this.service.getWeather(this.selectedCity).subscribe((response) => {
      this.weatherData = response.data;
      console.log(this.weatherData);
    });
  }

  getWeatherIcon(iconCode: string): string {
    console.log(iconCode);
    
    return this.service.getWeatherIcon(iconCode);
  }

  

}
