import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // @Input({required:true}) id : number;
  id = input.required<string>();
  name = input.required<string>();
  avatar = input.required<string>();
  avatarPath = computed(() => '/users/' + this.avatar());
}
