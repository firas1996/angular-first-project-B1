import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { User } from './tast-manager/users-list/user/user';
import { USERS } from './tast-manager/users-list/usersData';
import { Tasks } from './tast-manager/tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = USERS;
  selectedUserId = signal<string | null>(null);
  selectedUser = computed(() => {
    return this.users.find((user) => user.id === this.selectedUserId());
  });
  getSelectedUserId(id: string) {
    this.selectedUserId.set(id);
  }
}
