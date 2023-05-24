import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import mongoose from 'mongoose';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = 3001;
  // mongoose.connect(
  //   'mongodb+srv://dovanthang1998x:dovanthang1998@cluster0.yxkirra.mongodb.net/?retryWrites=true&w=majority',
  // );
  await app.listen(PORT, () => {
    console.log('Running in ', PORT);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
