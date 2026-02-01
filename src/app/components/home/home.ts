import { Component } from '@angular/core';
import { ToDoHeader } from "../to-do-header/to-do-header";
import { ToDoBody } from "../to-do-body/to-do-body";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-home',
  imports: [ToDoHeader, ToDoBody],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  tasks: Task[] = [];
  idCounter = 0;

  addTask(event: { title: string, description: string }) {
    this.tasks.push({
      id: this.idCounter++,
      title: event.title,
      description: event.description,
      completed: false
    });
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
