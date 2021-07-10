import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { InactiveComponent } from './inactive/inactive.component';
import { UseractiveComponent } from './useractive/useractive.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [
  {
      path: '',
      children: [
         
          {
              path: 'userlist',
              component: UserlistComponent
          },
          {
              path: 'adduser',
              component: AddUserComponent
          },
          {
              path: 'inactive',
              component: InactiveComponent
          },
          {
            path: 'useractive',
            component: UseractiveComponent
        },
      ],
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  UserListRoutingModule{ }