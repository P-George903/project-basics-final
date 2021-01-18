import {Injectable} from '@angular/core'
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model'
@Injectable()


export class RecipeService {
  recipeChanged = new Subject<Recipe[]>()
    
    
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'A Tasty schnitzel', 
    //     'This is simply a test', 
    //     'https://cdn.pixabay.com/photo/2020/07/01/13/28/wiener-schnitzel-5359641_1280.jpg',
    //     [
    //         new Ingredient('Meat', 2),
    //         new Ingredient('French Fries', 20)
    //     ]),
        
    //     new Recipe('Big Fat Burger', 
    //     'This is simply a test', 
    //     'https://cdn.pixabay.com/photo/2017/04/24/22/12/asparagus-2258013__340.jpg',
    //     [
    //         new Ingredient("asparagus", 7),
    //         new Ingredient("buns", 2)
    //     ])
    //   ];
    private recipes: Recipe[]= []
      constructor(private slService: ShoppingListService){}
      setRecipes(recipes: Recipe[]){
        this.recipes = recipes
        this.recipeChanged.next(this.recipes.slice())

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
      addRecipe(recipe:Recipe){
        this.recipes.push(recipe)
        this.recipeChanged.next(this.recipes.slice())
      }
      updateRecipe(index: number, newRecipe: Recipe ){
        this.recipes[index]= newRecipe
        this.recipeChanged.next(this.recipes.slice())

      }
      deleteRecipe(index: number){
          this.recipes.splice(index,1)
          this.recipeChanged.next(this.recipes.slice())
      }
}