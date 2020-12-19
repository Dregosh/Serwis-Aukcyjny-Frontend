import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {ActivatedRoute} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {

  isDone = false;
  isConfirmed = false;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    if (token) {
      this.authenticationService.confirmAccount(token)
        .pipe(
          tap(() => {
            this.isDone = true;
            this.isConfirmed = true;
          }),
          catchError((err, caught) => {
            this.isDone = true;
            this.isConfirmed = false;
            throw err;
          })).subscribe();
    }
  }
}
