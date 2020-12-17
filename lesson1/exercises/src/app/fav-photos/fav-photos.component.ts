import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Nice shots!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.myfitnesspal.com%2Fwant-to-crush-your-goals-get-smart%2F&psig=AOvVaw2UoEVuGbzfGIdzID5E7Mh9&ust=1608262471482000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCNhN6K1O0CFQAAAAAdAAAAABAJ';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}