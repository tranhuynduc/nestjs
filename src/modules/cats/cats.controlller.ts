import { Controller, Get, Post, Body, Param, ParseIntPipe, HttpStatus, ValidationPipe, VERSION_NEUTRAL } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/createCat.dto';

@Controller({
  path: 'cats',
})
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async fineOne(

    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))
    id: number
  ) {
    return 'Find one'
  }
}