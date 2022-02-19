import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  articles:any[] = [
    { username:"chourabi taher" , content:"this is small content", nbrLikes:18, didLike: false, date:new Date() },
    { username:"test usrer" , content:"this is small content 2", nbrLikes:5, didLike: true, date:new Date() },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
