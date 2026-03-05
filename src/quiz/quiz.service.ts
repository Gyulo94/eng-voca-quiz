import { BadRequestException, Injectable } from '@nestjs/common';
import { Level } from '@prisma/client';
import { WordService } from 'src/word/word.service';
import { QuizResponse } from './response/quiz.response';

@Injectable()
export class QuizService {
  constructor(private readonly wordService: WordService) {}

  async findQuizByLevel(level: Level): Promise<QuizResponse> {
    const words = await this.wordService.findAll(level);

    if (words.length < 4) {
      throw new BadRequestException('단어가 충분하지 않습니다.');
    }

    const answerIndex = Math.floor(Math.random() * words.length);
    const correctWord = words[answerIndex];

    const wrongAnswers = words
      .filter((_, index) => index !== answerIndex)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((word) => word.meaning);

    const shuffleAnsers = [correctWord.meaning, ...wrongAnswers].sort(
      () => 0.5 - Math.random(),
    );

    return {
      correctWord: correctWord.name,
      shuffleAnsers,
      correctAnswer: correctWord.meaning,
    };
  }
}
