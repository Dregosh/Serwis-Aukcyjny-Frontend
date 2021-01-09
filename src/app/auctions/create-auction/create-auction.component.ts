import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CreateAuction} from '../model/CreateAuction';
import {AuctionService} from '../../shared/services/auction.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FileValidator} from 'ngx-material-file-input';
import {finalize, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-auction',
  templateUrl: './create-auction.component.html',
  styleUrls: ['./create-auction.component.css']
})
export class CreateAuctionComponent implements OnInit {
  public createAuctionData$: Observable<CreateAuction>;
  private auctionForm: FormGroup;
  private addedImages: [];

  constructor(private auctionService: AuctionService,
              private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.createAuctionData$ = this.auctionService.getCreateAuctionData();
    this.auctionForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      startDate: new FormControl(this.getMinDate(), Validators.required),
      buyNowPrice: new FormControl('', [Validators.required, Validators.min(0)]),
      minPrice: new FormControl('', [Validators.required, Validators.min(0)]),
      promoted: new FormControl(false),
      categoryId: new FormControl('', Validators.required),
    });
  }

  public addAuction = () => this.auctionService.createAuction(this.auctionForm)
    .pipe(switchMap((auctionId) => this.auctionService.addImagesToAuction(this.addedImages, auctionId)))

  selectFiles(event): void {
    this.addedImages = event.target.files;
  }

  getMinDate(): Date {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    return minDate;
  }
}
