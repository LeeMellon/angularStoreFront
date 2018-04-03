import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css'],
  providers: [StoreService]
})

export class EditStoreComponent implements OnInit {
  @Input() selectedStore;

  constructor(private storeService: StoreService) { }

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
