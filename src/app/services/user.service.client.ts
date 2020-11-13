import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// export interface User {
//   _id: number;
//   username: string;
//   password: string;
// }

@Injectable()
export class UserService {
  users: User[];
  // users: User[] = USERS;
  // users = [
  //   {_id: 123, username: 'alice', password: 'alice'},
  //   {_id: 234, username: 'bob', password: 'bob'}
  // ];
  constructor(private http: HttpClient) {
  }

  loadAllUsers(): void {
    this.http.get('http://localhost:3000/api/users').subscribe(
      (data: User[]) => this.users = data
    );
  }
  findUserById(userId: string): Observable<any> {
    return this.http.get('http://localhost:3000/api/users/' + userId);
    // // const userNumber = parseInt(userId, 10);
    // for (let i = 0; i < this.users.length; i++) {
    //   const user = this.users[i];
    //   if (userId === user._id) {
    //     return user;
    //   }
    // }
  }


  findUserByCredentials(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/api/login',
      {username, password},
      {withCredentials: true});
    // for (let i = 0; i < this.users.length; i++) {
    //   const user = this.users[i];
    //   if (username === user.username &&
    //     password === user.password) {
    //     return user;
    //   }
    // }
  }

  createUser(user: any): Observable<object> {
    return this.http.post('http://localhost:3000/api/users', user);
  }

  findUserByLogin(): Observable<any> {
    return this.http.get('http://localhost:3000/api/profile',
      {withCredentials: true});
  }
}
