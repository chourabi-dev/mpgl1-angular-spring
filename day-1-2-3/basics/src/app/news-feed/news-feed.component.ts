import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  @Input() donnees:any;

  nbrLikes:number = 0;
  didLike:boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.donnees);

    this.nbrLikes = this.donnees.nbrLikes;
    this.didLike = this.donnees.didLike;
    
  }


  like(){
    if (this.didLike === true) {
      this.nbrLikes--;
      
    } else {
      this.nbrLikes++;
    }


    this.didLike = ! this.didLike;
  }

}
