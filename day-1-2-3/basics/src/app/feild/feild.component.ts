import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feild',
  templateUrl: './feild.component.html',
  styleUrls: ['./feild.component.css']
})
export class FeildComponent implements OnInit {

  x:string="0px"
  y:string="0px"
  constructor() { }

  ngOnInit(): void {
  }

  isMoving(event:MouseEvent){ 
    const x:number = event.clientX;
    const y:number = event.clientY;
 
    this.x= x+'px';
    this.y= y+'px';
  }

}
