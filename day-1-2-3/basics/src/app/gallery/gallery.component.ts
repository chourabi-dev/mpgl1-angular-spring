import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  galleryImages = [
    'https://scuffedentertainment.com/wp-content/uploads/2021/09/perfect-wallpaper-quiz.jpg',
    'https://data.1freewallpapers.com/download/fantasy-artwork-painting-4k-vaporwave-2880x1800.jpg',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg'
  ];
  indexGallery = 0;

  constructor() { }

  ngOnInit(): void {
  }


  next(){
    this.indexGallery++;
    
    if (this.indexGallery == this.galleryImages.length) {
      this.indexGallery = 0;
    }
  }


  previous(){
    this.indexGallery--;

    if (this.indexGallery < 0) {
      this.indexGallery = (this.galleryImages.length -1 )
    }
  }

}
