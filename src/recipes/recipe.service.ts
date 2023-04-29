/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeService {
  getAllRecipe() {
    return [
      {
        id: 1,
        recipce: 'Pineapple Smoothie',
        slug: 'pineapple-smoothie',
        ingredientId: 1,
        chef: 'Thang',
        image:
          'https://wholefoodsoulfoodkitchen.com/wp-content/uploads/2022/07/frozen-pineapple-smoothie-without-banana-4.jpg',
      },
      {
        id: 2,
        recipce: 'Mango Smoothie',
        slug: 'mango-smoothie',
        ingredientId: 2,
        chef: 'Thang',
        image:
          'https://cdn.nurfit.de/media/22/91/b3/1622196133/Mango%20Smoothie.jpg',
      },
    ];
  }
}
