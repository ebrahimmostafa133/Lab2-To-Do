import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-header.html',
  styleUrl: './to-do-header.css',
})
export class ToDoHeader {
  title: string = '';
  description: string = '';

  addTask() {
    if (this.title && this.description) {
      this.addTaskEvent.emit({ title: this.title, description: this.description });
      this.title = '';
      this.description = '';
    }
  }

  @Output() addTaskEvent = new EventEmitter<{ title: string, description: string }>();
}
