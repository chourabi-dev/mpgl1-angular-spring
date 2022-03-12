import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {


  users:any[] = [];
  isLoading:boolean = false;
  errTXT:string ='';

  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initData();
  }



  initData(){
    this.isLoading = true;

    this.api.getUsersList().toPromise().then(
      (res:any[])=>{
        console.log(res);
        this.users = res;
      }
    ).catch(
      (error)=>{
        this.errTXT = 'Something went wrong, please try again.'
      }
    ).finally(()=>{

      this.isLoading = false;
    })
  }

}
