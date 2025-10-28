import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  handelForm = output<void>();
  onClose() {
    this.handelForm.emit();
  }
}
