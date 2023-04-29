import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipes/recipe.module';
import { IngredientModule } from './ingredient/ingredient.module';

@Module({
  imports: [RecipeModule, IngredientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
