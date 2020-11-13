import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:userId',  component: ProfileComponent },
  { path: 'profile',  component: ProfileComponent },
  // { path: 'table/courses/:courseId/modules/:moduleId', comp}
];
export const routing = RouterModule.forRoot(appRoutes);
