import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForeCastComponent } from './weather-fore-cast.component';

describe('WeatherForeCastComponent', () => {
  let component: WeatherForeCastComponent;
  let fixture: ComponentFixture<WeatherForeCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherForeCastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherForeCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
