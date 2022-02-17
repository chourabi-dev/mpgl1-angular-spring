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

  employees:any[]  = [
    { fullname:"chourabi taher" , email:"tchourabi@gmail.com" },
    { fullname:"chourabi taher" , email:"tchourabi@gmail.com" },
    { fullname:"chourabi taher" , email:"tchourabi@gmail.com" },
    { fullname:"chourabi taher" , email:"tchourabi@gmail.com" },
    { fullname:"chourabi taher" , email:"tchourabi@gmail.com" },
    { fullname:"chourabi taher" , email:"tchourabi@gmail.com" },
    { fullname:"chourabi taher" , email:"tchourabi@gmail.com" },
    { fullname:"chourabi taher" , email:"tchourabi@gmail.com" },
    
    
  ];


  today:Date = new Date();



  showFirst:boolean = true;
  showSecond:boolean = false;
  




  formatDate(date:Date){
    const days = date.getDate();
    const month = (date.getMonth()+1);
    const year = date.getFullYear();

    return days+'/'+month+'/'+year;
  }




}
