import { Component, OnInit } from '@angular/core';
import {EditUserDTO} from '../model/editUserDTO';
import {EditUserService} from '../service/edit-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  loggedUser: EditUserDTO;

  constructor(private editUserService: EditUserService) { }

  ngOnInit(): void {
    this.editUserService.getLoggedUserData().subscribe(
      editUserDto => this.loggedUser = editUserDto);
  }

}
