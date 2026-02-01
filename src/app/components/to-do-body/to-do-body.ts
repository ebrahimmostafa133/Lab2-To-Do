import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../home/home';

@Component({
  selector: 'app-to-do-body',
  imports: [CommonModule],
  templateUrl: './to-do-body.html',
  styleUrl: './to-do-body.css',
})
export class ToDoBody {
  @Input() tasks: Task[] = [];
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() toggleEvent = new EventEmitter<number>();

  delete(id: number) {
    this.deleteEvent.emit(id);
  }

  toggle(id: number) {
    this.toggleEvent.emit(id);
  }
}
