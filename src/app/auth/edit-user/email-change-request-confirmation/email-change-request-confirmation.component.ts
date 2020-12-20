import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-email-change-request-confirmation',
  templateUrl: './email-change-request-confirmation.component.html',
  styleUrls: ['./email-change-request-confirmation.component.css']
})
export class EmailChangeRequestConfirmationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.router.navigateByUrl('/');
  }
}
