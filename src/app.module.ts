import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { RecipeModule } from './recipes/recipe.module';

@Module({
  imports: [UserModule, RecipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
