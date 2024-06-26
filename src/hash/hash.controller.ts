import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HashService } from './hash.service';
import { CreateHashDto } from './dto/create-hash.dto';
import { UpdateHashDto } from './dto/update-hash.dto';

@Controller('hash')
export class HashController {
  constructor(private readonly hashService: HashService) {}
  @Post('hash')
  async hash(@Body('senha') senha: string) {
    const senhaComHash = await this.hashService.hash(senha);
    return { senhaComHash };
  }

  @Post('comparar')
  async compararSenha(@Body('senha') senha: string, @Body('hash') hash: string) {
    const isMatch = await this.hashService.compararSenha(senha, hash);
    return { isMatch };
  }
  @Post()
  create(@Body() createHashDto: CreateHashDto) {
    return this.hashService.create(createHashDto);
  }

  @Get()
  findAll() {
    return this.hashService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hashService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHashDto: UpdateHashDto) {
    return this.hashService.update(+id, updateHashDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hashService.remove(+id);
  }
}
