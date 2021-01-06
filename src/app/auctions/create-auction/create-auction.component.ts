import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CreateAuction} from '../model/CreateAuction';
import {AuctionService} from '../../shared/services/auction.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FileValidator} from 'ngx-material-file-input';
import {switchMap} from 'rxjs/operators';

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
      startDate: new FormControl('', Validators.required),
      buyNowPrice: new FormControl('', [Validators.required, Validators.min(0)]),
      minPrice: new FormControl('', [Validators.required, Validators.min(0)]),
      promoted: new FormControl(false),
      categoryId: new FormControl('', Validators.required),
    });
  }
  public addAuction = () => this.auctionService.createAuction(this.auctionForm)
    .pipe(switchMap((auctionId) => {
      if (this.addedImages.length > 0) {
        return this.auctionService.addImagesToAuction(this.addedImages, auctionId);
      }
      return of(auctionId);
    }));

  selectFiles(event): void {
    this.addedImages = event.target.files;
  }
}
