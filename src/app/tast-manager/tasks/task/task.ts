import { Component, inject, Input, input, output } from '@angular/core';
import { type TheTask } from '../task.model';
import { TasksService } from '../../../../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TheTask>();
  // taskCompleted = output<number>();
  private tasksService = inject(TasksService);

  onComplete() {
    // this.taskCompleted.emit(this.task().id);
    this.tasksService.removeTask(this.task().id);
  }
}
