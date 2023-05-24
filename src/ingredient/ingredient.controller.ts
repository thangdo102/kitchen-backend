/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { IngredientService } from './ingredient.service'
import { Ingredient } from './ingredient.entity'

@Controller('ingredients')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get()
  findAll(): Promise<Ingredient[]> {
    return this.ingredientService.findAll()
  }

  // @Get(':id')
  // getById(@Param('id') id) {
  //   return this.ingredientService.findOne(id)
  // }

  @Get(':slug')
  getIngredientBySlug(@Param('slug') slug) {
    return this.ingredientService.getIngredientBySlug(slug)
  }

  @Post()
  create(@Body() ingredient: Ingredient) {
    return this.ingredientService.create(ingredient)
  }

  @Put()
  update(@Body() ingredient: Ingredient) {
    return this.ingredientService.update(ingredient)
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.ingredientService.delete(params.id)
  }
}
