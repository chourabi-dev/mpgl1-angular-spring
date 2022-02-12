import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  email = 'tchourabi@gmail.com';
  fullname:string = 'chourabi taher';
  phone;

  year:number = 2022;

  employees:string[]  = ['emmployee 1','employee 2'];






}
