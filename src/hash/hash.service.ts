import { Injectable } from '@nestjs/common';
import { CreateHashDto } from './dto/create-hash.dto';
import { UpdateHashDto } from './dto/update-hash.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {

  async hash(data: string) {
    const saltOrRounds = 10;
    return await bcrypt.hash(data, saltOrRounds);
  }

  async compararSenha(password: string, hash: string){
    return await bcrypt.compare(password, hash);
  }

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
