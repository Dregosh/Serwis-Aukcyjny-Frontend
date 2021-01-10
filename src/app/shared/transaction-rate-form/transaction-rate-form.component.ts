import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {AuctionService} from '../services/auction.service';

@Component({
  selector: 'app-transaction-rate-form',
  templateUrl: './transaction-rate-form.component.html',
  styleUrls: ['./transaction-rate-form.component.css']
})
export class TransactionRateFormComponent implements OnInit {
  purchaseId: number;
  ratingForm: FormGroup;
  currentRating = '';
  rateTextStyle = '';

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private auctionService: AuctionService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.purchaseId = Number(this.route.snapshot.paramMap.get('purchaseId'));
    this.ratingForm = this.fb.group({
      rating: [''],
      comment: ['']
    });
  }

  onSubmit(): void {
    if (this.ratingForm.valid) {
      this.auctionService.rateAsSeller(this.purchaseId, this.ratingForm)
        .pipe(
          tap(() => this.router.navigate(['user-auctions'])))
        .subscribe();
    }
  }

  onSetRating(ratingVal: string): void {
    switch (ratingVal) {
      case '1':
        this.currentRating = 'ZŁA';
        this.rateTextStyle = 'font-weight-bold text-danger';
        break;
      case '2':
        this.currentRating = 'SŁABA';
        this.rateTextStyle = 'font-weight-bold text-warning';
        break;
      case '3':
        this.currentRating = 'PRZECIĘTNA';
        this.rateTextStyle = 'font-weight-bold text-info';
        break;
      case '4':
        this.currentRating = 'DOBRA';
        this.rateTextStyle = 'font-weight-bold text-primary';
        break;
      case '5':
        this.currentRating = 'DOSKONAŁA';
        this.rateTextStyle = 'font-weight-bold text-success';
        break;
    }
  }

}
