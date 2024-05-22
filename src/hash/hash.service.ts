import { Injectable } from '@nestjs/common';
import { CreateHashDto } from './dto/create-hash.dto';
import { UpdateHashDto } from './dto/update-hash.dto';

@Injectable()
export class HashService {
  create(createHashDto: CreateHashDto) {
    return 'This action adds a new hash';
  }

  findAll() {
    return `This action returns all hash`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hash`;
  }

  update(id: number, updateHashDto: UpdateHashDto) {
    return `This action updates a #${id} hash`;
  }

  remove(id: number) {
    return `This action removes a #${id} hash`;
  }
}
