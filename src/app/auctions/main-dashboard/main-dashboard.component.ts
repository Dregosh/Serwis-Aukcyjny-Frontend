import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Dashboard} from '../model/Dashboard';
import {DashboardService} from '../service/dashboard.service';
import {AuthenticationService} from '../../shared/services/authentication.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  dashboard$: Observable<Dashboard>;

  constructor(private dashboardService: DashboardService,
              public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.dashboard$ = this.dashboardService.getDashboard();
  }

}
