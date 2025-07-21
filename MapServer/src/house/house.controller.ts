import { Controller, Get } from '@nestjs/common';
import { HouseService } from './house.service';
import { House } from './house.entity';

@Controller('houses')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get()
  findAll(): Promise<House> {
    return this.houseService.get();
  }
}
