import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ErrorCode} from '../../model/error-code';

@Component({
  selector: 'app-error-code',
  templateUrl: './error-code.component.html',
  styleUrls: ['./error-code.component.css']
})
export class ErrorCodeComponent implements OnInit {
  errorCode: ErrorCode;
  currentError: ErrorData;
  errorData: ErrorData[] = [
    {
      title: 'Nie możesz kupić podanej aukcji',
      text: 'Aukcja została wcześniej kupiona, lub rozpoczęła się licytacja.',
      errorCode: ErrorCode.AUCTION_CANNOT_BE_BOUGHT
    },
    {
      title: 'Zostałeś przelicytowany',
      text: 'Ktoś właśnie cię przelicytował, złóż wyższą ofertę.',
      errorCode: ErrorCode.AUCTION_OUTBIDDED
    },
    {
      title: 'Aukcja zakończona',
      text: 'Aukcja którą chcesz obserwować właśnie się zakończyła',
      errorCode: ErrorCode.CANNOT_OBSERVE_AUCTION
    }
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: ErrorCode) {
    this.errorCode = data;
  }

  ngOnInit(): void {
    this.currentError = this.errorData.filter((error) => error.errorCode === this.errorCode)[0];
  }

}

interface ErrorData {
  title: string;
  text: string;
  errorCode: ErrorCode;
}
