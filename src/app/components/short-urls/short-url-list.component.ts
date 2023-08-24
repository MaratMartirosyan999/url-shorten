import {Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectShortUrls} from "../../store/url/url.selectors";

@Component({
  selector: 'app-short-url-list',
  templateUrl: './short-url-list.component.html',
  styleUrls: ['./short-url-list.component.css']
})
export class ShortUrlList implements OnInit{
  readonly URL_PREFIX = 'https://www.';
  store = inject(Store)
  shortUrls!: string[];

  ngOnInit() {
    this.store.select(selectShortUrls).subscribe(urls => this.shortUrls = urls);
  }
}
