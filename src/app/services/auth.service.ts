import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire4/auth';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire4/database';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user = afAuth.authState;
    console.log(this.user);
    this.items = db.list('items');
    console.log(this.items);
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
