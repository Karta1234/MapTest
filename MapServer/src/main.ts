import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { House } from './house/house.entity';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const dataSource = app.get(DataSource);
  const repo = dataSource.getRepository(House);
  const exists = await repo.count();
  if (!exists) {
    await repo.save({
      address: 'Моховая улица, 6, Орехово-Зуево, Московская область, 142608',
      latitude: 55.807592,
      longitude: 38.945893,
      price: 10000000,
    });
    console.log('Дом добавлен в базу');
  }
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
