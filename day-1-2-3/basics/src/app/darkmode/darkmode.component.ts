import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent implements OnInit {

  darkModeEnabled:boolean = false
  constructor() { }

  ngOnInit(): void {
  }


  switch(){
    this.darkModeEnabled = ! this.darkModeEnabled;
  }

}
