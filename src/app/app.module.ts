import { NgModule, ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService} from './providers/user.service';
import { CommonService } from './providers/common.service';
import { IonicStorageModule } from '@ionic/storage';
import { ContactService } from './providers/contact.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from './providers/interceptor';
import { PopOverComponent } from './providers/pop-over/pop-over.component';

@NgModule({
  declarations: [AppComponent, PopOverComponent],
  entryComponents: [PopOverComponent],
  imports: [HttpClientModule ,BrowserModule, IonicModule.forRoot(), AppRoutingModule  ,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    CommonService,
    ContactService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
