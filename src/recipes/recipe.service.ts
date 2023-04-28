/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeService {
  getAllRecipe() {
    return [
      {
        id: 1,
        recipce: 'Pineapple Smoothie',
      },
      {
        id: 2,
        recipce: 'Mango Smoothie',
      },
    ];
  }
}
