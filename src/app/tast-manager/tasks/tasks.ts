import { Component, input } from '@angular/core';
import { Task } from './task/task';
import { AddTask } from './add-task/add-task';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  userName = input<string>();

  userId = input<string>();

  tasksData = [
    {
      id: 1,
      userId: 'u3',
      title: 'Task1',
      description: 'this is a task description',
      deadline: 'Feb 21th at 8:30am',
    },
    {
      id: 2,
      userId: 'u1',
      title: 'Task2',
      description: 'this is a task description',
      deadline: 'Feb 21th at 8:30am',
    },
    {
      id: 3,
      userId: 'u5',
      title: 'Task3',
      description: 'this is a task description',
      deadline: 'Feb 21th at 8:30am',
    },
    {
      id: 4,
      userId: 'u2',
      title: 'Task4',
      description: 'this is a task description',
      deadline: 'Feb 21th at 8:30am',
    },
    {
      id: 5,
      userId: 'u2',
      title: 'Task5',
      description: 'this is a task description',
      deadline: 'Feb 21th at 8:30am',
    },
    {
      id: 6,
      userId: 'u3',
      title: 'Task6',
      description: 'this is a task description',
      deadline: 'Feb 21th at 8:30am',
    },
  ];

  get selectedUserTasks() {
    return this.tasksData.filter((task) => {
      return task.userId === this.userId();
    });
  }
  onTaskCompleted(id: number) {
    this.tasksData = this.tasksData.filter((task) => task.id != id);
  }
}
