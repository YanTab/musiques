import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mes-musiques';

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDTih5iWR7eV0z5hytWFv8Ag-gV3n58KqA",
      authDomain: "mesmusiques-4b9ff.firebaseapp.com",
      databaseURL: "https://mesmusiques-4b9ff.firebaseio.com",
      projectId: "mesmusiques-4b9ff",
      storageBucket: "mesmusiques-4b9ff.appspot.com",
      messagingSenderId: "728132562813",
      appId: "1:728132562813:web:204514cc97f99d30"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
