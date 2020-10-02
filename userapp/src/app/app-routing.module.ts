import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListallUsersComponent } from './listall-users/listall-users.component';

const routes: Routes = [
{
  path:'add-user', component:AddUserComponent
},
{
  path:'list-user', component:ListUserComponent
},
{
  path:'listall-users', component:ListallUsersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
