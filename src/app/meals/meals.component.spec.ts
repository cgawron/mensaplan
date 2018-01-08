import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import { MealsComponent } from './meals.component';
import { MealDetailsComponent } from '../meal-details/meal-details.component';
import { MealsService } from '../meals.service';


describe('MealsComponent', () => {
  let component: MealsComponent;
  let fixture: ComponentFixture<MealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsComponent, MealDetailsComponent ],
      imports:[FormsModule ],
      providers:    [ MealsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
