import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDRM6CFk9Y7GVDKg-As33NmzuSC2kDPNm4",
    authDomain: "pepper-4bd94.firebaseapp.com",
    databaseURL: "https://pepper-4bd94.firebaseio.com",
    projectId: "pepper-4bd94",
    storageBucket: "pepper-4bd94.appspot.com",
    messagingSenderId: "532151083400"
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
