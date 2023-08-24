import { createReducer, on } from '@ngrx/store';
import * as UrlActions from './url.actions';

export interface UrlState {
  shortUrls: string[];
  error: any;
}

const initialState: UrlState = {
  shortUrls: [],
  error: null
};

export const urlReducer = createReducer(
  initialState,
  on(UrlActions.shortenUrlSuccess, (state, { shortUrls }) => ({ ...state, shortUrls, error: null })),
  on(UrlActions.shortenUrlFailure, (state, { error }) => ({ ...state, error }))
);
