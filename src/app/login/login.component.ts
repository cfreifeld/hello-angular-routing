import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.loadAllUsers();
  }

  login(): void {
    this.userService.findUserByCredentials(this.username, this.password)
    .subscribe(user => {
      // handle non-existent user
      if (user === undefined) {
        alert('No such user/password');
      } else {
        this.router.navigate(['/profile']);
      }
    });
  }
}
