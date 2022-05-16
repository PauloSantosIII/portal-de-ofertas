import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PagesModule } from './views/pages/pages.module'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
