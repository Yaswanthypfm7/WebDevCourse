import { Component } from '@angular/core';
import { Todo } from './Todo';

//Calling both html and css app components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//class for Todolist
export class AppComponent {
  title = 'Todolist';
  todos: Todo[] = [];
  newtodo:string;
  days:number;
  hours:number;
  minutes:number;
  secs:number;

//method to save the list
SaveTodo(){
  if(this.newtodo){
    let todo=new Todo();
    todo.task=this.newtodo;
    todo.isCompleted=true;
    this.todos.push(todo);
    this.newtodo="";
  }
  else{
    alert("Please enter the Task")
  }
}

//method for a task that completes
done(id:number){
  this.todos[id].isCompleted=!this.todos[id].isCompleted;
}

//method to remove from list
remove(id:number){
  this.todos = this.todos.filter((v,i)=>i !==id);
}

//logic for Event starts

x=setInterval(()=> {
  var eventdate= new Date("Feb 21, 2022 00:00:00").getTime();
var today=new Date().getTime();
var diff=eventdate-today;
this.days=Math.floor(diff/(1000*60*60*24));
this.hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
this.minutes=Math.floor((diff%(1000*60*60))/(1000*60));
this.secs=Math.floor((diff%(1000*60))/(1000));
},1000)

}

//logic for Event ends