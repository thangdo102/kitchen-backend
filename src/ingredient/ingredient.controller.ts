/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { IngredientService } from './ingredient.service';

@Controller('ingredients')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get(':slug')
  getIngredientBySlug(@Param('slug') slug: string) {
    return this.ingredientService.getIngredientBySlug(slug);
  }

  @Get('all')
  getAllIngredients() {
    return this.ingredientService.getAllIngredients();
  }
}
