import {Component, OnInit} from '@angular/core';
import {EditUserService} from '../service/edit-user.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EditUserDTO} from '../model/editUserDTO';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {switchMap, tap} from 'rxjs/operators';
import {UserExist} from '../registration-page/model/userExist';
import {Router} from '@angular/router';
import {identEmailsValidator} from './validators/ident-emails.validator';
import {of} from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  loggedUser: EditUserDTO;
  editionForm: FormGroup;
  emailChangeForm: FormGroup;
  savedDataInfo = '';
  errorMessage: string;
  changePasswordRequested = false;

  constructor(private editUserService: EditUserService,
              private authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.editionForm = this.fb.group({
      email: [''],
      displayName: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        number: ['', Validators.required],
        postal: ['', Validators.required]
      })
    });

    this.emailChangeForm = this.fb.group({
      oldEmail: [''],
      newEmail: ['', [Validators.required, Validators.email]],
      confirmNewEmail: ['', [Validators.required, Validators.email]]
    }, {validator: identEmailsValidator});

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
    if (this.editionForm.valid) {
      this.editUserService.updateUserInsensitiveData(this.editionForm.value)
        .pipe(
          tap(() => this.savedDataInfo = 'Zmiany zostały zapisane'),
          tap(() => setTimeout(() => {
            this.router.navigate(['my-account']);
          }, 1000))).subscribe();
    }
  }

  onSubmitEmailChange(): void {
    if (this.emailChangeForm.valid) {
      this.authenticationService
        .userExist(this.loggedUser.displayName, this.emailChangeForm.value.newEmail)
        .pipe(
          switchMap((userExist: UserExist) => {
            if (userExist.emailExist) {
              this.errorMessage = 'Istnieje już konto z takim adresem e-mail';
              throw new Error('User exist');
            } else {
              const updateEmailRequestCommand = {newEmail: this.emailChangeForm.value.newEmail};
              return this.editUserService.updateUserEmail(updateEmailRequestCommand);
            }
          }),
          switchMap(() => this.router.navigate(['auth/email-change-request-confirm'])))
        .subscribe();
    }
  }

  buyPremiumAccount = () => this.editUserService.buyPremiumAccount()
    .pipe(tap(url => window.location.href = url))

  onPasswordChange(): void {
    this.editUserService.changePasswordRequest()
      .pipe(tap(() => this.changePasswordRequested = true)).subscribe();
  }

  get newEmail(): AbstractControl {
    return this.emailChangeForm.get('newEmail');
  }

  get confirmNewEmail(): AbstractControl {
    return this.emailChangeForm.get('confirmNewEmail');
  }

  get firstName(): AbstractControl {
    return this.editionForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.editionForm.get('lastName');
  }

  get city(): AbstractControl {
    return this.editionForm.get('address').get('city');
  }

  get street(): AbstractControl {
    return this.editionForm.get('address').get('street');
  }

  get number(): AbstractControl {
    return this.editionForm.get('address').get('number');
  }

  get postal(): AbstractControl {
    return this.editionForm.get('address').get('postal');
  }
}
