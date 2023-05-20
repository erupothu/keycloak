import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'user', component: UserComponent , canActivate: [AuthGuard], data: {roles: ['test']}},
  { path: 'admin', component: AdminComponent , canActivate: [AuthGuard], data: {roles: ['ADMIN_ROLE']}},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
