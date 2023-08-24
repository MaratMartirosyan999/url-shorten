import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UrlInputComponent} from './components/url-input/url-input.component';
import {ShortUrlList} from './components/short-urls/short-url-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {urlReducer} from "./store/url/url.reducer";
import {UrlEffects} from "./store/url/url.effects";

@NgModule({
  declarations: [
    AppComponent,
    UrlInputComponent,
    ShortUrlList
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterLink,
    StoreModule.forRoot({ url: urlReducer }),
    EffectsModule.forRoot([UrlEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
