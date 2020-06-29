import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../../lib/users/user.model";
import {UsersApiService} from "../../../lib-angular/users/users-api.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users: UserModel[] = [];

  constructor(public usersService: UsersApiService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(users => this.users = users)
  }

}
