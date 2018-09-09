import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout } from "rxjs/operators" //pake timout
@Injectable({
	providedIn: 'root'
})
export class TodoService {
	url = "https://jsonplaceholder.typicode.com/todos";

	constructor(public http: HttpClient) {

	}

	/** buat fungsi untuk mendapatkan todo */
	get () {
		return this.http.get(this.url).pipe(timeout(1000));
	}
}
