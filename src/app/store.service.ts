import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Store } from './store.model';
import { Album } from './album.model';


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

  addInventory(storeToStock: Store, newAlbum: Album) {
    storeToStock.inventory.push(newAlbum);
  }

  updateStore(localUpdatedStore){
    var storeEntryInFirebase = this.getStoreById(localUpdatedStore.$key);
    storeEntryInFirebase.update({name: localUpdatedStore.name,
                                locale: localUpdatedStore.locale,
                                estDate: localUpdatedStore.estDate
                                });
  }

  deleteStore(localStoreToDelete){
    var storeEntryInFirebase = this.getStoreById(localStoreToDelete.$key);
    storeEntryInFirebase.remove();
  }
}
