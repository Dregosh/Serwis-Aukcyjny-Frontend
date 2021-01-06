import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {catchError, finalize} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginLoading = false;
  loginForm: FormGroup;
  errorMessage;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService,
              private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const redirect = this.activatedRoute.snapshot.queryParamMap.get('redirect');
      this.loginLoading = true;
      this.authService.login(this.loginForm.value.login, this.loginForm.value.password, redirect ? redirect : 'dashboard')
        .pipe(catchError(() =>  this.errorMessage = 'Nieprawidłowy login lub hasło'),
          finalize(() => this.loginLoading = false))
        .subscribe();
    }
  }

  login = () => {
    const redirect = this.activatedRoute.snapshot.queryParamMap.get('redirect');
    return this.authService.login(this.loginForm.value.login, this.loginForm.value.password, redirect ? redirect : 'dashboard')
      .pipe(catchError(() => this.errorMessage = 'Nieprawidłowy login lub hasło'));
  }

}
