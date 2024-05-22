import { Controller, Injectable } from '@nestjs/common';
import { CreateEncryptionDto } from './dto/create-encryption.dto';
import { UpdateEncryptionDto } from './dto/update-encryption.dto';
import { promisify } from 'util';
import { createCipheriv, randomBytes, scrypt, createDecipheriv } from 'crypto';

@Injectable()
export class EncryptionService {
  
  async encrypt(data: string) {
    const iv = randomBytes(16);
    const password = 'Password used to generate key';
    
    const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);
    
    const encryptedText = Buffer.concat([
      cipher.update(data),
      cipher.final(),
    ]);

    return encryptedText;
  }

  // async decrypt(encryptedText) {
  //   const iv = randomBytes(16);
  //   const password = 'Password used to generate key';

  //   const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    
  //   const decipher = createDecipheriv('aes-256-ctr', key, iv);
  //   const decryptedText = Buffer.concat([
  //     decipher.update(encryptedText),
  //     decipher.final(),
  //   ]);

  //   return decryptedText;
  // }



  create(createEncryptionDto: CreateEncryptionDto) {
    return 'This action adds a new encryption';
  }

  findAll() {
    return `This action returns all encryption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} encryption`;
  }

  update(id: number, updateEncryptionDto: UpdateEncryptionDto) {
    return `This action updates a #${id} encryption`;
  }

  remove(id: number) {
    return `This action removes a #${id} encryption`;
  }
}
