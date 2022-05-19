import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../user';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="https://jsonplaceholder.typicode.com/todos/1";
  constructor(private http : HttpClient) { };
  user(){
    return this.http.get(this.url);

  }
  users() :Observable<IUser[]>{
    return this.http.get<IUser[]>("/assets/user.json");
  }
}
