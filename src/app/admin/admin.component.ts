import { Component } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';
import { Store } from '../store.model';
import { StoreService } from '../store.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService, StoreService]
})
export class AdminComponent {

  constructor(private albumService: AlbumService, private storeService: StoreService) { }

  submitForm(title: string, artist: string, description: string) {
     var newAlbum: Album = new Album(title, artist, description);
     console.log(newAlbum);
     this.albumService.addAlbum(newAlbum);
   }


   submitStoreForm(name: string, locale: string, estDate: string) {
      var newStore: Store = new Store(name, locale, estDate);
      console.log(newStore);
      this.storeService.addStore(newStore);
    }
  //  submitInventory(){
  //    this.storeService.addInventory(newAlbum);
  //  }
}
