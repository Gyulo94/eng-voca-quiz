import { Controller, Get, Query } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Level } from '@prisma/client';

@Controller('/api/quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  findQuizByLevel(@Query('level') level: Level) {
    console.log('컨트롤러 진입');
    const response = this.quizService.findQuizByLevel(level);
    return response;
  }
}
