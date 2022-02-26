import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloc-page',
  templateUrl: './bloc-page.component.html',
  styleUrls: ['./bloc-page.component.css']
})
export class BlocPageComponent implements OnInit {

  articles:any[] = [
    { id:1, title:"Angular spring" },
    { id:2, title:"React vs Angular" },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
