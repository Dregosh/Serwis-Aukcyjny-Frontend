import { Component, OnInit } from '@angular/core';
import {EditUserService} from '../service/edit-user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UpdateEmailRequestCommandDTO} from '../model/updateEmailRequestCommandDTO';
import {EditUserDTO} from '../model/editUserDTO';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  loggedUser: EditUserDTO;
  editionForm: FormGroup;
  emailChangeForm: FormGroup;
  initiatedEmailChange = false;

  constructor(private editUserService: EditUserService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editionForm = this.fb.group({
      email: [''],
      displayName: [''],
      firstName: [''],
      lastName: [''],
      address: this.fb.group({
        city: [''],
        street: [''],
        number: [''],
        postal: ['']
      })
    });

    this.emailChangeForm = this.fb.group({
      oldEmail: [''],
      newEmail: [''],
      confirmNewEmail: ['']
    });

    this.editUserService.getLoggedUserData().subscribe(
      editUserDto => {
        this.loggedUser = editUserDto;

        this.editionForm.setValue({
          email: editUserDto.email,
          displayName: editUserDto.displayName,
          firstName: editUserDto.firstName,
          lastName: editUserDto.lastName,
          address: {
            city: editUserDto.address.city,
            street: editUserDto.address.street,
            number: editUserDto.address.number,
            postal: editUserDto.address.postal
          }
        });
      });
  }

  onSubmit(): void {
    this.editUserService.updateUserInsensitiveData(this.editionForm.value)
      .subscribe();
  }

  onSubmitEmailChange(): void {
    const command: UpdateEmailRequestCommandDTO =
      new UpdateEmailRequestCommandDTO(
        this.loggedUser.email,
        this.emailChangeForm.value.newEmail);
    this.editUserService.updateUserEmail(command).subscribe(
      () => {
        this.initiatedEmailChange = true;
      }
    );
  }

  onPasswordChange(): void {

  }
}
