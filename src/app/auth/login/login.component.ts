import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      this.authService.login(this.loginForm.value.login, this.loginForm.value.password, redirect ? redirect : 'dashboard')
        .pipe(catchError(() =>  this.errorMessage = 'Nieprawidłowy login lub hasło'))
        .subscribe();
    }
  }

}
