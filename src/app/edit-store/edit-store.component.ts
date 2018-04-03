import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../services/store.service';
import { AlbumService } from '../services/album.service';
// import { Album } from '../album.model';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css'],
  providers: [StoreService, AlbumService]
})

export class EditStoreComponent implements OnInit {
  @Input() selectedStore;
  // @Input() albumsList;
  constructor(private storeService: StoreService, private albumService: AlbumService) { }
  ngOnInit() {
  }

  updateStore(storeToUpdate){
    this.storeService.updateStore(storeToUpdate);
  }

  deleteStore(storeToDelete){
    if(confirm("Are you sure you want to do that? Really? Fur Sursies?")){
      this.storeService.deleteStore(storeToDelete);
    }
  }


}
