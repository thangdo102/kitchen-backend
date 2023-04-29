/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';

const ingredients = [
  {
    id: 1,
    recipeId: 1,
    recipe: 'Pineapple Smoothie',
    ingredients: ['Pineapple', 'Ice'],
    instruction: 'Blend pineapple with ice!',
    slug: 'pineapple-smoothie',
    image:
      'https://wholefoodsoulfoodkitchen.com/wp-content/uploads/2022/07/frozen-pineapple-smoothie-without-banana-4.jpg',
  },
  {
    id: 2,
    recipeId: 2,
    recipe: 'Mango Smoothie',
    ingredients: ['Mango', 'Ice'],
    instruction: 'Blend mango with ice!',
    slug: 'mango-smoothie',
    image:
      'https://cdn.nurfit.de/media/22/91/b3/1622196133/Mango%20Smoothie.jpg',
  },
];

@Injectable()
export class IngredientService {
  getIngredientBySlug(slug: string) {
    const ingredient = ingredients.find((ing) => ing.slug === slug);
    return ingredient;
  }

  getAllIngredients() {
    return ingredients;
  }
}
