/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  getAllRecipe() {
    return this.recipeService.getAllRecipe();
  }
}
