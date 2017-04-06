import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { UUID } from 'angular2-uuid';


export const firebaseConfig = {
  apiKey: "AIzaSyCvklrB0Loye2cXEXn2F_MCS0B821EizKQ",
    authDomain: "crud-ad7e9.firebaseapp.com",
    databaseURL: "https://crud-ad7e9.firebaseio.com",
    projectId: "crud-ad7e9",
    storageBucket: "crud-ad7e9.appspot.com",
    messagingSenderId: "956266954831"
}

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [UUID],
  bootstrap: [AppComponent]
})
export class AppModule { }
