import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
// import { CrudComponent } from './crud/crud.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app works!';
  cuisines: FirebaseListObservable<any[]>;
  restaurant;


  constructor(private af: AngularFire) {
    console.log('af',af)
  }

  ngOnInit() {
    this.cuisines = this.af.database.list('/cuisines');
    this.restaurant = this.af.database.object('/restaurant');
  }

  add() {
    this.cuisines.push({
      name: 'Asian',
      details: {
        description: "..."
      }
    });
  }
  //update for non-desructive
  update() {
    this.af.database.object('/favorites/1/10').set(true)
  }
  remove() {
    this.af.database.object('/restaurant').remove()
    .then(x => console.log("success"))
    .catch(error => console.log('fail'))
  }

}
