/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { RecipeService } from './recipe.service'
import { Recipe } from './recipe.entity'

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll()
  }

  @Get(':slug')
  findBySlug(@Param('slug') slug) {
    return this.recipeService.findBySlug(slug)
  }

  @Post()
  create(@Body() recipe: Recipe) {
    return this.recipeService.create(recipe)
  }

  @Put()
  update(@Body() recipe: Recipe) {
    return this.recipeService.update(recipe)
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.recipeService.delete(params.id)
  }
}
