import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AgmCoreModule } from '@agm/core';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from 'src/environments/environment.prod';
import { LoginPage } from './connexion/login.page';
import { Tab4Page } from './contact/tab4.page';
import { ConversationPage } from './conversation/conversation.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { RegisterPage } from './inscription/register.page';
import { ProposeaidePage } from './proposeaide/proposeaide.page';


export const firebaseConfig = {
    apiKey: "AIzaSyCpyPjrgZd21FRTrM2XZ5YoFnCSUIzVV94",
    authDomain: "ask-share.firebaseapp.com",
    projectId: "ask-share",
    storageBucket: "ask-share.appspot.com",
    messagingSenderId: "432388793018",
    appId: "1:432388793018:web:3c103dd071c7b7b3281883"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    Tab4Page,
    ConversationPage,
    DashboardPage,
    RegisterPage,
    ProposeaidePage,
],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAY_vNuLd2xgqob7THNsuE6SyLKxsvyJ3I',
      libraries: ['places']
    }),
   AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
