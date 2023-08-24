import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {shortenUrl} from "../../store/url/url.actions";

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.css']
})
export class UrlInputComponent {
  private store = inject(Store)
  longUrl: string = '';

  onShorten() {
    this.store.dispatch(shortenUrl({longUrl: this.longUrl}));
  }
}
