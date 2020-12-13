
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model'
@Injectable()


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
    
    
    private recipes: Recipe[] = [
        new Recipe(
            'A Tasty schnitzel', 
        'This is simply a test', 
        'https://cdn.pixabay.com/photo/2020/07/01/13/28/wiener-schnitzel-5359641_1280.jpg',
        [
            new Ingredient('Meat', 2),
            new Ingredient('French Fries', 20)
        ]),
        
        new Recipe('Big Fat Burger', 
        'This is simply a test', 
        'https://cdn.pixabay.com/photo/2017/04/24/22/12/asparagus-2258013__340.jpg',
        [
            new Ingredient("asparagus", 7),
            new Ingredient("buns", 2)
        ])
      ];
      constructor(private slService: ShoppingListService){

      }
      getRecipes(){
          return this.recipes.slice()
      }
      getRecipe(index: number){
          return this.recipes[index]
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
            this.slService.addIngredients(ingredients)
      }
}