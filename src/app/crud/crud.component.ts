import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
// import  *  as uuid from 'uuid';
import { UUID } from 'angular2-uuid';
// const uuidV4 = require('uuid/v4');
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private angularFire:AngularFire, uuid:UUID ) {
    console.log('angularFire', angularFire)
   }

  crud: FirebaseListObservable<any[]>;
  crudObj: FirebaseObjectObservable<any>

  ngOnInit() {
    this.crud = this.angularFire.database.list('/list')
    console.log("CRUD",this.crud)
  }

   add(name,number) {
    this.crud.push({
      name,
      number
    });
  }

  // update(name,number) {
  //   let uuid = UUID.UUID();
  //   console.log(uuid)
  //   this.angularFire.database.object(`/list/${uuid}`).update({
  //     name:name,
  //     number: number,
  //     uuid: uuid
  //   })
  // }

  // test(a,b){
  //   console.log(a);
  //   console.log(b);
  // }
  remove(c) {
    this.angularFire.database.object(`/list/${c}`).remove()
    // .then(x => console.log("success"))
    // .catch(error => console.log('fail'))
    console.log('c value',c);
    console.log('clicked')
    

  }

  uuidGenerate(){
    let uuid = UUID.UUID();
    console.log(uuid)
    console.log(this.crud);
    
  }

}
