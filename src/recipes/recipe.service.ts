/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Recipe } from './recipe.entity'
import { DeleteResult, Repository, UpdateResult } from 'typeorm'

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepo: Repository<Recipe>,
  ) {}

  async findAll(): Promise<Recipe[]> {
    return await this.recipeRepo.find()
  }

  async findBySlug(slug: string): Promise<Recipe> {
    return await this.recipeRepo.findOne({
      where: {
        slug: slug,
      },
    })
  }

  async create(recipe: Recipe): Promise<Recipe> {
    return await this.recipeRepo.save(recipe)
  }

  async update(recipe: Recipe): Promise<UpdateResult> {
    return await this.recipeRepo.update(recipe.id, recipe)
  }

  async delete(id: any): Promise<DeleteResult> {
    return await this.recipeRepo.delete(id)
  }
}
