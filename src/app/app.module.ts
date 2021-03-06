import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TecladoPage } from '../pages/teclado/teclado';
import { NumberBrasil } from '../pages/teclado/teclado.pipe';
import { LancamentoPage } from '../pages/lancamento/lancamento';
import { CategoriaModalPage } from '../pages/categoria-modal/categoria-modal';
import { RepetirModalPage } from '../pages/repetir-modal/repetir-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TecladoPage,
    NumberBrasil,
    LancamentoPage,
    CategoriaModalPage,
    RepetirModalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TecladoPage,
    LancamentoPage,
    CategoriaModalPage,
    RepetirModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
