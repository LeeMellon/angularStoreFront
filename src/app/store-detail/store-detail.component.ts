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
  albumsList: Album[];

  constructor(private route: ActivatedRoute, private location: Location, private storeService: StoreService, private albumService: AlbumService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.storeId = urlParameters['id'];
    })

    this.storeService.getStoreById(this.storeId).subscribe
    (store => {
      this.storeToDisplay = store;
      // console.log(this.storeToDisplay);

    })

    this.albumService.getAlbums().subscribe(albums =>{
      this.albumsList = albums;
      this.storeInventoryList = this.storeService.inventoryList(this.storeToDisplay, this.albumsList)
      // console.log(this.storeInventoryList)
    })


  }



  update(store){
    this.storeService.updateStore(store)
  }

  minusOne(albums){
      albums[1]-=1;
  }

  addOne(albums){
    albums[1]+=1;
  }
}
