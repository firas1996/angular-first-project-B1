import { Component, computed, input, Input } from '@angular/core';

interface UserType {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // @Input({required:true}) id : number;
  // id = input.required<string>();
  // name = input.required<string>();
  // avatar = input.required<string>();
  user = input.required<UserType>();
  // avatarPath = computed(() => '/users/' + this.avatar());
  avatarPath = computed(() => '/users/' + this.user().avatar);
}
