import { Injectable } from '@nestjs/common';
import { Level, Prisma, Word } from '@prisma/client';
import { PrismaService } from 'src/global/prisma/prisma.service';

@Injectable()
export class WordRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(level?: Level): Promise<Word[]> {
    let where: Prisma.WordWhereInput = {};
    if (level) {
      where = {
        level,
      };
    }
    const result = await this.prisma.word.findMany({
      where,
    });
    return result;
  }
}
