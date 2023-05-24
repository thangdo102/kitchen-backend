/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Ingredient } from './ingredient.entity'
import { DeleteResult, Repository, UpdateResult } from 'typeorm'

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepo: Repository<Ingredient>,
  ) {}

  async findAll(): Promise<Ingredient[]> {
    return await this.ingredientRepo.find()
  }

  async findOne(id: any): Promise<Ingredient> {
    return await this.ingredientRepo.findOne({
      where: {
        id: id,
      },
    })
  }

  async getIngredientBySlug(slug: any): Promise<Ingredient> {
    const data = await this.ingredientRepo.findOne({
      where: {
        slug: slug,
      },
    })

    return data
  }

  async create(ingredient: Ingredient): Promise<Ingredient> {
    return await this.ingredientRepo.save(ingredient)
  }

  async update(ingredient: Ingredient): Promise<UpdateResult> {
    return await this.ingredientRepo.update(ingredient.id, ingredient)
  }

  async delete(id: any): Promise<DeleteResult> {
    return await this.ingredientRepo.delete(id)
  }
}
