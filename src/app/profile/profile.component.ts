import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service.client';
import {User} from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private userId: string;
  private subscription: any;
  user: User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.subscription =
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.userId;
      this.user = this.userService.findUserById(this.userId);
    });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
