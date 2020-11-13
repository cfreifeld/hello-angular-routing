import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  faveSites: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.userService.createUser({username: this.username, password: this.password,
    websites: this.faveSites})
    .subscribe((user) => { console.log(user); });
  }
}
