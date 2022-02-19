import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit { 
  tasks = [
    {
      content : "create a new project",
      date : new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
 
  typing(event){  
    console.log("test");
    
    const val = event.target.value;
    const code = event.code; 
    if (code === 'Enter') {
      const task = {
        content: val,
        date : new Date()
      }

      this.tasks.push(task);
      event.target.value="";
    } 
  }

}
