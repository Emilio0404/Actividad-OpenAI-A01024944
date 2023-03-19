import { Component, OnInit } from '@angular/core';
import { ModerationsService } from '../services/moderations.service';

@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent {
  constructor(private moderations : ModerationsService) { }

  ngOnInit(): void {
  }

  result : string = "";
  userInput : string = "";

  postCompletition() {

    var payload = { 
      input: this.userInput
    }

    this.moderations.postCompletition(payload)
    .subscribe((data: any) => {
	      console.log(data);
        this.result = data.results[0].flagged;
  });
  }
}