import { Injectable } from '@nestjs/common';
import { Todo } from '@my-org/todos';
@Injectable()
export class AppService {
  getData(): Todo[] {
    return [
      { message: 'Take Out the Trash', done: false },
      { message: 'continue using nx', done: true },
    ];
  }
}
