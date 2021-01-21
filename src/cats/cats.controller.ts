import { Controller, Get, Post, Req, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import CreateCatDto from './create-cat.dto';


@Controller('cats')
export class CatsController {

  @Get()
  findAll(): string {
    return `return all cats`;
  }

  @Post()
  create(@Body() dto:CreateCatDto): string {
      return dto.name
  }

}
