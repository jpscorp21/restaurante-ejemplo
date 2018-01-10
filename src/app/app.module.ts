import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActionsheetEjemploPage } from '../pages/actionsheet-ejemplo/actionsheet-ejemplo';
import { AlertPage } from '../pages/alert/alert';
import { BadgeejemploPage } from '../pages/badgeejemplo/badgeejemplo';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { CardsocialPage } from '../pages/cardsocial/cardsocial';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionsheetEjemploPage,
    AlertPage,
    BadgeejemploPage,
    ButtonsPage,
    CheckboxPage,
    CardsocialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionsheetEjemploPage,
    AlertPage,
    BadgeejemploPage,
    ButtonsPage,
    CheckboxPage,
    CardsocialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
