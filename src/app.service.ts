import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Faizan worls';
  }

  postHello(): string {
    return 'Post Faizan';
  }
}
