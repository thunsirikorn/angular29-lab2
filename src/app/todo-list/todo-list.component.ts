import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from '../models/todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  id: number = 0;
  todoTask: TodoList[] = [];

  ngOnInit(): void {
  }

  newTask; 
  newDescription;

  addToList() { 
    if (this.newTask == '', this.newDescription == '') { 
    } 
    else { 
        this.todoTask.push(this.newTask, this.newDescription); 
        this.newTask = ''; 
    } 
    }  


deleteTask(index) { 
      this.todoTask.splice(index, 1); 
    } 


}
