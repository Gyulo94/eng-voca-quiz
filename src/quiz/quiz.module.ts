import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { WordModule } from 'src/word/word.module';

@Module({
  imports: [WordModule],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
