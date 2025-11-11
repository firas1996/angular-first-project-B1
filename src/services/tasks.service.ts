import { Injectable } from '@angular/core';
import { TaskData } from '../app/tast-manager/tasks/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
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
  addTask(taskData: TaskData, id: string) {
    this.tasksData.push({
      id: Date.now(),
      userId: id,
      ...taskData,
    });
  }
  removeTask(id: number) {
    this.tasksData = this.tasksData.filter((task) => task.id != id);
  }

  getUserTasks(id: string) {
    return this.tasksData.filter((task) => {
      return task.userId === id;
    });
  }
}
