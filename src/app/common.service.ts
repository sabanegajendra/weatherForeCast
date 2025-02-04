import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

   API_URL = 'https://api.weatherbit.io/v2.0/forecast/daily';
   API_KEY = 'c2b0076a481f4eb08e5663c59ae5364a';

  constructor(private http: HttpClient) {}

  getWeather(city: string, days: number = 5): Observable<any> {
    const url = `${this.API_URL}?city=${city}&key=${this.API_KEY}&days=${days}`;
    return this.http.get(url);
  }

  getWeatherIcon(iconCode: string): string {
    return `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;
  }
}
