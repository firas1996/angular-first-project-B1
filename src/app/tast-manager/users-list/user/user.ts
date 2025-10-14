import { Component, computed, input, Input, output } from '@angular/core';

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
  select = output<string>();
  selected = input.required<boolean>();
  // avatarPath = computed(() => '/users/' + this.avatar());
  avatarPath = computed(() => '/users/' + this.user().avatar);
  onSelectUser() {
    this.select.emit(this.user().id);
    console.log(this.user().id);
  }
}
