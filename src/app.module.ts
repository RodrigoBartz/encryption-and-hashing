import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncryptionModule } from './encryption/encryption.module';
import { HashModule } from './hash/hash.module';

@Module({
  imports: [EncryptionModule, HashModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
