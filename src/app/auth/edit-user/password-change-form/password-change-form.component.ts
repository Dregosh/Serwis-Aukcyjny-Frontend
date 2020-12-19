import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {passwordValidator} from '../validators/password.validator';
import {EditUserService} from '../../service/edit-user.service';

@Component({
  selector: 'app-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent implements OnInit {
  token = '';
  passwordForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private editUserService: EditUserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');

    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validator: passwordValidator});
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      const changePasswordCommand = {
        token: this.token,
        newPassword: this.passwordForm.value.password
      };
      this.editUserService.executePasswordChange(changePasswordCommand).subscribe(
        () => this.router.navigateByUrl('/'));
    }
  }

  get password(): AbstractControl {
    return this.passwordForm.get('password');
  }
}
