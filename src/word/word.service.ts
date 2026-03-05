import { Injectable, NotFoundException } from '@nestjs/common';
import { WordRepository } from './word.repository';
import { Level, Word } from '@prisma/client';

@Injectable()
export class WordService {
  constructor(private readonly wordRepository: WordRepository) {}

  async findAll(level?: Level) {
    const words: Word[] = await this.wordRepository.findAll(level);
    if (words.length < 0) {
      throw new NotFoundException('단어목록이 존재하지 않습니다.');
    }
    return words;
  }
}
