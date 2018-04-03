import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '../store.model';
import { StoreService } from '../store.service';
import { Album } from '../album.model';
@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css'],
  providers: [StoreService]
})
export class StoreDetailComponent implements OnInit {
  storeId: string;
  storeToDisplay;


  constructor(private route: ActivatedRoute, private location: Location, private storeService: StoreService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.storeId = urlParameters['id'];
    })

    this.storeService.getStoreById(this.storeId).subscribe
    (dataLastEmittedFromObserver => {
      this.storeToDisplay = dataLastEmittedFromObserver;
      console.log(this.storeToDisplay);

    })
  }

}
