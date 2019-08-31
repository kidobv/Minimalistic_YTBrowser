import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-video-item',
    templateUrl: './video-item.component.html',
    styleUrls: ['./video-item.component.css']
})

export class VideoItemComponent implements OnChanges {
@Input() videoItem;
@Output() selectedVideo = new EventEmitter<void>();
    title: string;
    thumbnail: string;
    description: string;
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.videoItem) {
            this.title = this.videoItem.snippet.title;
            this.description = this.videoItem.snippet.description;
            this.thumbnail = this.videoItem.snippet.thumbnails.high.url;
        }
    }

    onVideoSelected() {
        this.selectedVideo.emit();
    }
}
