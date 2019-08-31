import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './api/youtube.service';
import { Video } from './shared/video.model';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  apiVideoList: Observable<[]>;
  selectedVideo: Video;
  defaultVideo;
  isLoadingApiCall = true;

  constructor(private youTubeService: YoutubeService) { }

  ngOnInit(): void {
    // default initial search
    this.onTermSubmit('Kurzgesagt – In a Nutshell');
  }

    async onTermSubmit(term: string) {
    // Using our service to call youtube api with the search term
     const videos = await this.youTubeService.getVideosSearch(term);
        // Knowing the structure of the Youtube search API response we can parse to JSON and access the list of videos
     this.apiVideoList = JSON.parse(JSON.stringify(videos)).items;
     // Setting the default video to be display in the details component to be the first in the response list
     this.defaultVideo = this.apiVideoList[0];
     this.selectedVideo = new Video(this.defaultVideo.id.videoId, this.defaultVideo.snippet.title, this.defaultVideo.snippet.description);
     this.isLoadingApiCall = false;

     if (!this.selectedVideo) {
        Swal.fire('No video found', 'please try a different search query', 'warning');
      }

  }
  showSelectedVideo = (video: Video) => {
    this.selectedVideo = video;
  }
}
