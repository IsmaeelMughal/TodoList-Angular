import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title: string;
  desc: string;

  @Output()
  todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.title = '';
    this.desc = '';
  }

  onSubmit() {
    const todo = {
      sno: Math.random(),
      title: this.title,
      desc: this.desc,
      active: true,
    };

    this.todoAdd.emit(todo);
  }
}
