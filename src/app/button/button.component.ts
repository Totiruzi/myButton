import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    title: String = 'Hello';
    text: boolean ;

    clickEvent() {
        /*this.title = 'Hello World';*/
        this.text = !this.text;
    }

  constructor() { }

  ngOnInit() {
  }

}
