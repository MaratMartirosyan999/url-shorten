import {createAction, props} from '@ngrx/store';

export const shortenUrl = createAction('[URL] Shorten URL', props<{ longUrl: string }>());
export const shortenUrlSuccess = createAction('[URL] Shorten URL Success', props<{ shortUrls: string[] }>());
export const shortenUrlFailure = createAction('[URL] Shorten URL Failure', props<{ error: any }>());
