import { Component, inject, input } from '@angular/core';
import { Task } from './task/task';
import { AddTask } from './add-task/add-task';
import { TaskData } from './task.model';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  isAddingTask = false;
  userName = input<string>();
  userId = input.required<string>();
  private tasksService = inject(TasksService);

  onTaskCompleted(id: number) {}
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }
  onAddingTask() {
    this.isAddingTask = !this.isAddingTask;
  }
  onOpenAddingTask() {
    this.isAddingTask = true;
  }
  onCloseAddingTask() {
    this.isAddingTask = false;
  }
}
