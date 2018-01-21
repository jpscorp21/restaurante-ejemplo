import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from '@agm/core';
import { Ionic2RatingModule } from 'ionic2-rating';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActionsheetEjemploPage } from '../pages/actionsheet-ejemplo/actionsheet-ejemplo';
import { AlertPage } from '../pages/alert/alert';
import { BadgeejemploPage } from '../pages/badgeejemplo/badgeejemplo';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { CardsocialPage } from '../pages/cardsocial/cardsocial';
import { DatetimePage } from '../pages/datetime/datetime';
import { FabsPage } from '../pages/fabs/fabs';
import { GridPage } from '../pages/grid/grid';
import { InputPage } from '../pages/input/input';
import { FormularioPage } from '../pages/formulario/formulario';
import { ListalinePage } from '../pages/listaline/listaline';
import { ListdividerPage } from '../pages/listdivider/listdivider';
import { MainPage } from '../pages/main/main';
import { CatsPage } from '../pages/cats/cats';
import { DogsPage } from '../pages/dogs/dogs';
import { RadioPage } from '../pages/radio/radio';
import { RestaurantePage } from '../pages/restaurante/restaurante';
import { AgregarRestaurantePage } from '../pages/agregar-restaurante/agregar-restaurante';
import { RestauranteService } from '../servicios/restaurante.service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionsheetEjemploPage,
    AlertPage,
    BadgeejemploPage,
    ButtonsPage,
    CheckboxPage,
    CardsocialPage,
    DatetimePage,
    FabsPage,
    GridPage,
    InputPage,
    FormularioPage,
    ListalinePage,
    ListdividerPage,
    MainPage,
    CatsPage,
    DogsPage,
    RadioPage,
    RestaurantePage,
    AgregarRestaurantePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6PxRo9j0dqiXn8fSWY_nIeMpZeCpuCZE'
    }),
    Ionic2RatingModule
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
    CardsocialPage,
    DatetimePage,
    FabsPage,
    GridPage,
    InputPage,
    FormularioPage,
    ListalinePage,
    ListdividerPage,
    MainPage,
    CatsPage,
    DogsPage,
    RadioPage,
    RestaurantePage,
    AgregarRestaurantePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Camera,
    RestauranteService
  ]
})
export class AppModule {}
