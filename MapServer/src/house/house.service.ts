import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { House } from './house.entity';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(House)
    private houseRepository: Repository<House>,
  ) {}

  async get(): Promise<House> {
    return this.houseRepository
      .findOne({ where: {}, order: { id: 'ASC' } })
      .then((house) => {
        if (!house) {
          throw new NotFoundException('Дом не найден в базе данных');
        }
        return house;
      });
  }
}
