import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Store } from '../models/store.model';
import { Album } from '../models/album.model';


@Injectable()
export class StoreService {

  stores: FirebaseListObservable <any[]>;

  constructor(private database: AngularFireDatabase) {
    this.stores = database.list('stores');
  }

  getStores() {
    return this.stores;
  }

  addStore(newStore: Store) {
    this.stores.push(newStore);
  }

  getStoreById(storeId: string){
    return this.database.object('stores/' + storeId);
  }

  updateStore(localUpdatedStore){
    var storeEntryInFirebase = this.getStoreById(localUpdatedStore.$key);
    storeEntryInFirebase.update({name: localUpdatedStore.name,
                                locale: localUpdatedStore.locale,
                                estDate: localUpdatedStore.estDate,
                                inventory: localUpdatedStore.inventory
                                });
  }

  deleteStore(localStoreToDelete){
    var storeEntryInFirebase = this.getStoreById(localStoreToDelete.$key);
    storeEntryInFirebase.remove();
  }

  inventoryList(store: Store, albumsList: any[]){
    let newInventory = new Map([]);
    var currentInventory = store.inventory
    console.log(currentInventory.size)
    for(let x = 0; x < albumsList.length; x++ ){
      for(let y = 0; y < currentInventory.size; y++){
        if(albumsList[x].id !== store.inventory[y].id){
          let thisAlbum = store.inventory[y][0]
          newInventory.set([thisAlbum], 0)
        }
      }
    }
    console.log(newInventory)
    return store.inventory
  }


}
