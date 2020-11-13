import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  constructor(private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.subscription =
    // this.activatedRoute.params.subscribe(params => {
    //   this.userId = params.userId;
    //   this.user = this.userService.findUserById(this.userId);
    // });
    this.user = new User();
    this.activatedRoute.params.subscribe(params => {
      if (params.userId) {
        this.userId = params.userId;
        this.userService.findUserById(this.userId).subscribe(
          (user: User) => {
            this.user = user;
          }
        );
      } else {
        console.log('getting logged in profile');
        this.userService.findUserByLogin().subscribe(
          (user: User) => {
            if (!user._id) {
              this.router.navigate(['/login']);
            }
            console.log(user);
            this.user = user;
          }
        );
      }
    });
  }

  removeItem(ws: string): void {
    this.user.websites = this.user.websites.filter(w => w !== ws);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
