import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MealsComponent } from './meals/meals.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MealsService } from './meals.service';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    MealDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    MealsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
