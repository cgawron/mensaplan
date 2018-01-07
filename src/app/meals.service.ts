import { Injectable } from '@angular/core';
import { Meal } from './meal';
import { MEALS } from './mock-meals';

@Injectable()
export class MealsService {

  constructor() { }

  getMeals(): Meal[] {
    return MEALS;
  }

}
