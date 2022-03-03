import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  coonect(){
    this.auth.setCoonection();
  }
}
