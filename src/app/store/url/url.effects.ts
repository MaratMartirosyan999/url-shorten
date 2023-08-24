import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UrlActions from './url.actions';
import {UrlShortenerService} from "../../services/url-shortener.service";

@Injectable()
export class UrlEffects {
  constructor(private actions$: Actions, private urlShortenerService: UrlShortenerService) {}

  shortenUrl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UrlActions.shortenUrl),
      mergeMap(action =>
        this.urlShortenerService.shorten(action.longUrl).pipe(
          map(shortUrls => UrlActions.shortenUrlSuccess({ shortUrls })),
          catchError(error => of(UrlActions.shortenUrlFailure({ error })))
        )
      )
    )
  );
}
