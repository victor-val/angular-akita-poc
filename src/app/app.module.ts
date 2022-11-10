import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { AppComponent } from './app.component';
import { SetNameComponent } from './set-name/set-name.component';
import { GetNameComponent } from './get-name/get-name.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SetNameComponent,
    GetNameComponent
  ],
  imports: [environment.production ? [] : AkitaNgDevtools.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
