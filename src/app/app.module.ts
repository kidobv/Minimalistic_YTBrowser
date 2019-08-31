import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchBarComponent} from './searchBar/searchbar.component';
import { YoutubeService } from './api/youtube.service';
import { VideoDetailsComponent } from './videoDetails/video-details.component';
import { VideoListComponent } from './videoList/video-list.component';
import { VideoItemComponent } from './videoList/videoItem/video-item.component';
import { SafePipe } from './shared/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoDetailsComponent,
    VideoListComponent,
    VideoItemComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
