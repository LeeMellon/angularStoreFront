import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '../models/store.model';
import { StoreService } from '../services/store.service';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css'],
  providers: [StoreService, AlbumService]
})
export class StoreDetailComponent implements OnInit {
  storeId: string;
  storeToDisplay;
  storeInventoryList;
  albumsList;

  constructor(private route: ActivatedRoute, private location: Location, private storeService: StoreService, private albumService: AlbumService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.storeId = urlParameters['id'];
    })

    this.storeService.getStoreById(this.storeId).subscribe
    (store => {
      this.storeToDisplay = store;
      console.log(this.storeToDisplay);

    })

    // this.albumsList = this.albumService.getAlbums()
    // this.albumsList.subscribe(albums =>{
    //   albums.forEach((album)=>{
    //     if()
  }

}
