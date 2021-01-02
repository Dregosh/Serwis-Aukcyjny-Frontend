import { Component, OnInit, Input } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-image-container',
  templateUrl: './auction-images.component.html',
  styleUrls: ['./auction-images.component.css']
})
export class AuctionImagesComponent implements OnInit {
  @Input() images: string[] = null;
  @Input() selectedImage: string = null;
  constructor() { }

  ngOnInit(): void { }

  getImageUrl(name: string): string {
    return environment.photoUrl + name;
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }
}
