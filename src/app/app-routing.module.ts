import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForeCastComponent } from './weather-fore-cast/weather-fore-cast.component';

const routes: Routes = [
  {path:'', component: WeatherForeCastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
