import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { TODO } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private ngFirestore: AngularFirestore, private router: Router) {}

  async create(todo: TODO) {
    try {
      let result = await this.ngFirestore.collection('tasks').add(todo);
      return !!result;
    } catch (error) {
      return false;
    }
  }

  getTasks() {
    try {
      let result = this.ngFirestore.collection('tasks').snapshotChanges();
      return !!result;
    } catch (error) {
      return error;
    }
  }

  getTask(id) {
    try {
      let result = this.ngFirestore.collection('tasks').doc(id).valueChanges();

      return result;
    } catch (error) {
      return false;
    }
  }

  async update(id, todo: TODO) {
    try {
      let result = await this.ngFirestore
        .collection('tasks')
        .doc(id)
        .update(todo);

      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async delete(id: string) {
    try {
      let result = await this.ngFirestore.doc('tasks/' + id).delete();
      return result;
    } catch (error) {
      return false;
    }
  }
}
