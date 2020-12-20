import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-email-change-confirmation',
  templateUrl: './email-change-confirmation.component.html',
  styleUrls: ['./email-change-confirmation.component.css']
})
export class EmailChangeConfirmationComponent implements OnInit {

  isDone = false;
  isConfirmed = false;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    if (token) {
      this.authenticationService.confirmEmailChange(token)
        .pipe(
          tap(() => {
            this.isDone = true;
            this.isConfirmed = true;
          }),
          catchError((err, caught) => {
            this.isDone = true;
            this.isConfirmed = true;
            throw err;
          })).subscribe();
    }
  }

  onClick(): void {
    this.router.navigateByUrl('/');
  }
}
