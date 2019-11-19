import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxVisavailModule } from 'projects/ngx-visavail/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxVisavailModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
