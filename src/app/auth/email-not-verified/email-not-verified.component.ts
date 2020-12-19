import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-email-not-verified',
  templateUrl: './email-not-verified.component.html',
  styleUrls: ['./email-not-verified.component.css']
})
export class EmailNotVerifiedComponent implements OnInit {
  resend = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  public resendVerificationCode(): void {
    this.authService.resendVerificationCode()
      .pipe(tap(() => this.resend = true))
      .subscribe();
  }
}
