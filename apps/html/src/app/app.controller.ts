import { Controller, Render } from '@nestjs/common';
import axios from 'axios';
import { Todo } from '@my-org/todos';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Render('index')
  async root() {
    return {
      todos: await this.getData(),
    };
  }

  async getData() {
    try {
      const response = await axios.get<Todo[]>('http://localhost:3333');
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
}
