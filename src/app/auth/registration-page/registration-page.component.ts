import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {UserExist} from './model/userExist';
import {Register} from './model/register';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) {
  }
  registerForm: FormGroup;
  errorMessage: string;
  loading = false;


  private static checkPassword(group: FormGroup): any {
    const pass = group.get('password').value;
    const confirmPass = group.get('repeatPassword').value;
    return pass === confirmPass ? null : {notSame: true};
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      displayName: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      city: ['', Validators.required],
      postal: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
    }, {validator: RegistrationPageComponent.checkPassword});
  }

  public onSubmit(): void {
    if (this.registerForm.valid) {
      this.authenticationService.userExist(this.registerForm.value.displayName, this.registerForm.value.email)
        .pipe(switchMap((userExist: UserExist) => {
          if (userExist.emailExist) {
            this.errorMessage = 'Podany email jest już zajęty';
            throw new Error('User exist');
          } else if (userExist.displayNameExist) {
            this.errorMessage = 'Podana nazwa użytkownika jest już zajęta';
            throw new Error('User exist');
          } else {
            return this.authenticationService.registerUser(this.mapForm());
          }
        }),
          switchMap(() => this.router.navigate(['auth/registration-completed']))).subscribe();
    }
  }


  private mapForm(): Register {
    return {
      address: {
        city: this.registerForm.value.city,
        street: this.registerForm.value.street,
        postal: this.registerForm.value.postal,
        number: this.registerForm.value.houseNumber,
      },
      displayName: this.registerForm.value.displayName, email: this.registerForm.value.email, firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName, password: this.registerForm.value.password

    };
  }
}
