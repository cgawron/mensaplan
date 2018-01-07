import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MealsService } from '../meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: Meal[];

  selectedMeal: Meal;

  onSelect(meal: Meal): void {
    this.selectedMeal = meal;
  }

  constructor(private mealsService: MealsService) { 
  }

  ngOnInit() {
    this.meals = this.mealsService.getMeals();
  }

}
