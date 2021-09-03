import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  itemName = '';
  tasksCollection: AngularFirestoreCollection<any>;

  constructor(firestore: AngularFirestore) {
    this.tasksCollection = firestore.collection('items');
  }

  ngOnInit(): void {
  }

  onSubmit(): boolean {
    // Do not use Task type here, since this forces us to use an id. We don't want to add an id, since this is auto-generated.
    this.tasksCollection.add({
      name: this.itemName
    });
    this.itemName = '';
    return true;
  }

}
