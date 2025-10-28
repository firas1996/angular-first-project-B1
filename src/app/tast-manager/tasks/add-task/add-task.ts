import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../task.model';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  handelForm = output<void>();
  // enteredTitle = '';
  // enteredDescription = '';
  // enteredDeadline = '';
  taskData = {
    title: '',
    description: '',
    deadline: '',
  };
  newTaskData = output<TaskData>();
  onClose() {
    this.handelForm.emit();
  }
  onSubmit() {
    // this.newTaskData.emit({title:this.enteredTitle,description:this.enteredDescription,deadline:this.enteredDeadline})
    if (
      this.taskData.title != '' &&
      this.taskData.description != '' &&
      this.taskData.deadline != ''
    ) {
      this.newTaskData.emit(this.taskData);
      this.taskData = {
        title: '',
        description: '',
        deadline: '',
      };
      this.handelForm.emit();
    }
  }
}
