import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(public http: HttpClient) {}

   getVideosSearch(term: string) {
   // let apiVideoList;
   try {
     const maxResults = 6;
     const apiKey = 'AIzaSyB6gTUpgBcFVKQZlTaZvU8UgAkkyOniwJs';
     const url = 'https://www.googleapis.com/youtube/v3/search?key='
       + apiKey + '&q=' + term + '&part=snippet&type=video&maxResults=' + maxResults;

     // tslint:disable-next-line: max-line-length
     // the map operator allows us to get some data an return new one, automatically re-wrapped in an Observable so we can still subscribe to it
     const res = this.http.get(url).pipe(map(response => response)).toPromise();
     return res;
    // We can use pipe(map()) to manipulate the response data and use Type control
    } catch { // default error
      return {
        items: [
          {
            id: {
              kind: '',
              videoId: ''
            },
            snippet: {
              title: 'Search video error',
              thumbnails: {
                default: {
                  url: 'https://via.placeholder.com/120x90',
                  width: 120,
                  height: 90
                }
              },
            }
          }
        ]
      };
    }
  }
}
