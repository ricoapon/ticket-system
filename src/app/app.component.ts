import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Task } from './types/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasksCollection: AngularFirestoreCollection<Task>;
  items: Observable<Task[]>;
  constructor(firestore: AngularFirestore) {
    this.tasksCollection = firestore.collection<Task>('items');
    this.items = this.tasksCollection.valueChanges({idField: 'id'});
  }

  delete(id: string): void {
    this.tasksCollection.doc(id).delete();
  }
}
