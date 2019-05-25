import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[];	


  constructor() { }

  ngOnInit() {
  	this.todos = [
  		{
  			id:1,
  			title : 'Title One',
  			completed : false
  		},
  		{
  			id:2,
  			title: 'Title Two',
  			completed: true
  		},
  		{
  			id:3,
  			title:'Title Three',
  			completed: true
  		}
  	]

}

}
