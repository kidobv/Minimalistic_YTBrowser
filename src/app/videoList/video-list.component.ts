import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import {Video} from '../shared/video.model';

@Component({
    selector: 'app-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.css']
})

export class VideoListComponent {
@Input() videoList: [];
@Output() selectedVideoParent = new EventEmitter<Video>();

    videoItemSelected(video) {
        const selectedVideo = new Video(video.id.videoId, video.snippet.title, video.snippet.description);
        this.selectedVideoParent.emit(selectedVideo);
    }
}
