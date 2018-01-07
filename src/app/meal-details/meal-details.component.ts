import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {

  @Input() meal: Meal;

  constructor() { }

  ngOnInit() {
  }

}
