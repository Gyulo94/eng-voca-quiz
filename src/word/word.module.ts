import { Module } from '@nestjs/common';
import { WordService } from './word.service';
import { WordController } from './word.controller';
import { WordRepository } from './word.repository';
import { PrismaService } from 'src/global/prisma/prisma.service';

@Module({
  controllers: [WordController],
  providers: [WordService, WordRepository, PrismaService],
  exports: [WordService, WordRepository],
})
export class WordModule {}
