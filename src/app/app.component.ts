import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TodoService } from './todo.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	url = "https://jsonplaceholder.typicode.com/todos";
	todos: any = [];
	loading = false;

	constructor (public http: HttpClient, public todo: TodoService) {
		// this.getTodos()
		this.getTodosWithSrv()
	}

  /**
   * Ini kalo nda mo pake service, tapi lebih bagus pake service
   */
   getTodos () {
   	this.loading = true;
   	this.http.get(this.url).subscribe(
   		success => {
   			this.loading = false;
  			// jika sukses ambil data
  			console.log("sukses bro", success);
  			// tampung dp data di todos
  			this.todos = success;
  		},
  		error => {
  			this.loading = false;
  			console.log("error sahip", error);
  		}
  		)
   }

   getTodosWithSrv () {
   	this.todo.get().subscribe(
   		success => {
   			this.loading = false;
  			// jika sukses ambil data
  			console.log("sukses bro", success);
  			// tampung dp data di todos
  			this.todos = success;
  		},
  		error => {
  			this.loading = false;
  			console.log("error sahip", error);
  		}
  	)
   }
}
