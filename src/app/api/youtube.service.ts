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
     const apiKey = 'AIzaSyCbO-eE6rputww7OMDr1_rxkw2Ue30g2eI';
     const url = 'https://www.googleapis.com/youtube/v3/search?key='
       + apiKey + '&q=' + term + '&part=snippet&type=video&maxResults=' + maxResults;

     // tslint:disable-next-line: max-line-length
     // We need to convert the Observable from the API call to a Promise so that we can use the await keyword in order to wait for the Promise to be resolved
     return this.http.get(url).pipe(map(response => response)).toPromise();
     
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
