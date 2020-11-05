import {Injectable} from '@angular/core';
import {USERS} from '../user.mock';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';

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
    this.http.get('https://wbdv-generic-server.herokuapp.com/api/ccf/users').subscribe(
      (data: User[]) => this.users = data
    );
  }
  findUserById(userId: string): User {
    // const userNumber = parseInt(userId, 10);
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (userId === user._id) {
        return user;
      }
    }
  }


  findUserByCredentials(username: string, password: string): User {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (username === user.username &&
        password === user.password) {
        return user;
      }
    }
  }

}
