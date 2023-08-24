import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  httpClient = inject(HttpClient)
  private readonly apiUrl = 'https://api.shrtco.de/v2/shorten';
  private shortUrlsSubject: BehaviorSubject<any> = new BehaviorSubject<any>([])


  getShortUrls(): Observable<string[]> {
    return this.shortUrlsSubject.asObservable();
  }

  shorten(longUrl: string): Observable<string[]> {
    const queryParams = `?url=${longUrl}`;
    return this.httpClient.get<any>(this.apiUrl + queryParams).pipe(
      map(response => [response.result.short_link, response.result.short_link2]),
      catchError(error => {
        console.error('Error while shortening URL:', error);
        throw error;
      })
    );
  }
}
