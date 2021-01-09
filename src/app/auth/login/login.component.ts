import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {catchError, finalize, tap} from 'rxjs/operators';
import {RedirectStore} from '../../shared/services/redirect.store';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService,
              private redirectStore: RedirectStore) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login = () => {
    return this.authService.login(this.loginForm.value.login, this.loginForm.value.password, this.redirectStore.redirect ? this.redirectStore.redirect : 'dashboard')
      .pipe(catchError(() => this.errorMessage = 'Nieprawidłowy login lub hasło'),
        tap(() => this.redirectStore.redirect = null));
  };
}
