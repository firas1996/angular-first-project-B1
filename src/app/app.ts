import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { User } from './tast-manager/users-list/user/user';
import { USERS } from './tast-manager/users-list/usersData';

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = USERS;
}
