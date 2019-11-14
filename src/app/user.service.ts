import { Injectable } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/auth";
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Observable<firebase.User>;
  constructor(private fs: AngularFireAuth) {

    this.user = fs.authState;
   }


   signup(email: string, password: string) {
    this.fs
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.fs
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');

        localStorage.setItem("user", value.user.displayName);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.fs
      .auth
      .signOut();

      localStorage.setItem("user", "");
  }

}
