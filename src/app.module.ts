import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { WordModule } from './word/word.module';

@Module({
  imports: [QuizModule, WordModule],
  providers: [],
})
export class AppModule {}
