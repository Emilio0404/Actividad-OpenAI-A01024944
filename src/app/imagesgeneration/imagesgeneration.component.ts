import { Component, OnInit } from '@angular/core';
import { ImagesgenerationService } from '../services/imagesgeneration.service';

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})

export class ImagesgenerationComponent implements OnInit {
  constructor(private imagesgeneration : ImagesgenerationService) { }

  ngOnInit(): void { }

  imageUrl : string = "";
  userInput : string = "";

  postCompletition() {
    var payload = {
      prompt: this.userInput,
      size: `1024x1024`,
      n: 1
    }

    this.imagesgeneration.postCompletition(payload)
      .subscribe((data: any) => {
        this.imageUrl = data.data[0].url;
      })
  }
}