import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My to do list';
  empty=true
  todolist = []

  newItem: string = ""
  newPriority : number;
  
  //...............................................
  //Task = [{ TaskName: "Bath", Priority: "High" },
 // { TaskName: "Eat", Priority: "Medium" },
  //{ TaskName: "Wash", Priority: "Low" }]
  Task = []


  TaskNames: string;
  PriorityNames: string;
 


  AddNewTask() {
    this.Task.push({ TaskName: this.TaskNames, Priority: this.PriorityNames })
    this.TaskNames = ""
    this.PriorityNames = ""
    if (this.Task.length >0){
      this.empty = false
    }
  }

  RemoveTask(Task) {
    let index = this.Task.indexOf(Task)
    this.Task.splice(index, 1)

  }

  EditTask(Task) {
    let newTaskName = prompt("edit your new taskName",this.TaskNames);
    let newPriority = prompt("edit new priority", this.PriorityNames);
    let index = this.Task.indexOf(Task)
   
    if ((newTaskName != null) && (newPriority != null)) {
      this.Task[index].TaskName = newTaskName;
      this.Task[index].Priority = newPriority
    }


    //var newPriority = prompt("Please enter your new Priority", this.PriorityNames);
    //if (newPriority !=null){
    //  this.PriorityNames[index];
    //}
  }
}

