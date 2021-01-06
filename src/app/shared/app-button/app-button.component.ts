import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})
export class AppButtonComponent implements OnInit {
  @Input() class = 'btn btn-info';
  @Input() disabled = false;
  @Input() action: Observable<any>;
  @Input() text: string;

  loading = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loading = true;
    this.action.pipe(
      finalize(() => this.loading = false)
    ).subscribe();
  }
}
