import { Component, OnInit } from '@angular/core';
import { Store } from '../models/store.model';
// import { Album } from '../album.model';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [StoreService]
})

export class DirectoryComponent implements OnInit {

  constructor(private storeService: StoreService, private router: Router) { }
  currentRoute: string = this.router.url;
  stores: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.stores = this.storeService.getStores();
  }

  goToDetailPage(clickedStore) {
    this.router.navigate(['stores', clickedStore.$key]);
  }

}
