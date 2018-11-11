import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { TimeAgoPipe} from 'time-ago-pipe';
import { InViewportModule } from 'ng-in-viewport';


@NgModule({
  declarations: [
    AppComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
