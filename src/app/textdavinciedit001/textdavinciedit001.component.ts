import { Component, OnInit } from '@angular/core';
import { Textdavinciedit001 } from '../services/textdavinciedit001.service';

@Component({
  selector: 'app-textdavinciedit001',
  templateUrl: './textdavinciedit001.component.html',
  styleUrls: ['./textdavinciedit001.component.css']
})
export class Textdavinciedit001Component {
  constructor(private textdavinciedit001 : Textdavinciedit001) { }

  ngOnInit(): void {
  }

  howToEdit : string = "";
  originalText : string = "";
  editedText : string = "";

  postCompletition() {

    var payload = { 
      model: "text-davinci-edit-001",
      input: this.originalText,
      instruction: this.howToEdit, 
    }

    this.textdavinciedit001.postCompletition(payload)
    .subscribe((data: any) => {
	      console.log(data);
        this.editedText = data.choices[0].text;
  });
  }
}