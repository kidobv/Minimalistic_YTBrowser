import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { Video } from '../shared/video.model';


@Component({
    selector: 'app-video-details',
    templateUrl: './video-details.component.html'
})

export class VideoDetailsComponent implements OnChanges {
  @Input() video: Video;
  videoSrc: string;

  // onChanges lifecycle method will listen to changes in the input property "video"
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "video" changed
    if (changes.video) {
      this.videoSrc = `https://www.youtube.com/embed/${this.video.videoId}`;
    }
  }
}
