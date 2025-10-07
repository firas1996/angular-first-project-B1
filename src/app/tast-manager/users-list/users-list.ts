import { Component } from '@angular/core';
import { USERS } from './usersData';
import { User } from './user/user';

@Component({
  selector: 'app-users-list',
  imports: [User],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {}
