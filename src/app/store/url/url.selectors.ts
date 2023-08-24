import { createSelector, createFeatureSelector } from '@ngrx/store';
import {UrlState} from "./url.reducer";

export const selectUrlState = createFeatureSelector<UrlState>('url');

export const selectShortUrls = createSelector(
  selectUrlState,
  (state: UrlState) => state.shortUrls
);
