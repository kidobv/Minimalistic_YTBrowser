(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/youtube.service.ts":
/*!****************************************!*\
  !*** ./src/app/api/youtube.service.ts ***!
  \****************************************/
/*! exports provided: YoutubeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeService", function() { return YoutubeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var YoutubeService = /** @class */ (function () {
    function YoutubeService(http) {
        this.http = http;
    }
    YoutubeService.prototype.getVideosSearch = function (term) {
        // let apiVideoList;
        try {
            var maxResults = 6;
            var apiKey = 'AIzaSyCbO-eE6rputww7OMDr1_rxkw2Ue30g2eI';
            var url = 'https://www.googleapis.com/youtube/v3/search?key='
                + apiKey + '&q=' + term + '&part=snippet&type=video&maxResults=' + maxResults;
            // tslint:disable-next-line: max-line-length
            // the map operator allows us to get some data an return new one, automatically re-wrapped in an Observable so we can still subscribe to it
            var res = this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; })).toPromise();
            return res;
            // We can use pipe(map()) to manipulate the response data and use Type control
        }
        catch ( // default error
        _a) { // default error
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
    };
    YoutubeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], YoutubeService);
    return YoutubeService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class='ui container' style=\"margin-top: 15px\">\r\n  <h3 class=\"ui header\">\r\n    <i class=\"youtube icon\" style=\"color:red\"></i>\r\n    <div class=\"content\">\r\n      Youtube Search\r\n    </div>\r\n  </h3>\r\n  <app-search-bar (search)=\"onTermSubmit($event)\"></app-search-bar>\r\n  <div class='ui centered grid'>\r\n    <div *ngIf=\"isLoadingApiCall\">\r\n      <h3 style=\"margin-top: 50px\">Loading...</h3>\r\n      <div class=\"progress\">\r\n        <div class=\"indeterminate\"></div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class='ui row' style=\"margin-top: 10px\">\r\n      <div *ngIf=\"selectedVideo\" class='sixteen wide column'>\r\n        <app-video-details [video]=\"selectedVideo\"></app-video-details>\r\n      </div>         \r\n    </div>   \r\n    \r\n    <div class=\"ui horizontal divider\" style=\"background-color: transparent; overflow: visible\">\r\n      Results\r\n    </div>\r\n\r\n    <div class='ui row'>\r\n      <div *ngIf=\"apiVideoList\" class='sixteen wide column'>\r\n        <div class=\"ui container\" style=\"text-align: center\">\r\n          <app-video-list (selectedVideoParent)=\"showSelectedVideo($event)\" [videoList]=\"apiVideoList\"></app-video-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_youtube_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/youtube.service */ "./src/app/api/youtube.service.ts");
/* harmony import */ var _shared_video_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/video.model */ "./src/app/shared/video.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var AppComponent = /** @class */ (function () {
    function AppComponent(youTubeService) {
        var _this = this;
        this.youTubeService = youTubeService;
        this.isLoadingApiCall = true;
        this.showSelectedVideo = function (video) {
            _this.selectedVideo = video;
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        // default initial search
        this.onTermSubmit('Kurzgesagt – In a Nutshell');
    };
    AppComponent.prototype.onTermSubmit = function (term) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var videos;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.youTubeService.getVideosSearch(term)];
                    case 1:
                        videos = _a.sent();
                        // Knowing the structure of the Youtube search API response we can parse to JSON and access the list of videos
                        this.apiVideoList = JSON.parse(JSON.stringify(videos)).items;
                        // Setting the default video to be display in the details component to be the first in the response list
                        this.defaultVideo = this.apiVideoList[0];
                        this.selectedVideo = new _shared_video_model__WEBPACK_IMPORTED_MODULE_3__["Video"](this.defaultVideo.id.videoId, this.defaultVideo.snippet.title, this.defaultVideo.snippet.description);
                        this.isLoadingApiCall = false;
                        if (!this.selectedVideo) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('No video found', 'please try a different search query', 'warning');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_youtube_service__WEBPACK_IMPORTED_MODULE_2__["YoutubeService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _searchBar_searchbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchBar/searchbar.component */ "./src/app/searchBar/searchbar.component.ts");
/* harmony import */ var _api_youtube_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/youtube.service */ "./src/app/api/youtube.service.ts");
/* harmony import */ var _videoDetails_video_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./videoDetails/video-details.component */ "./src/app/videoDetails/video-details.component.ts");
/* harmony import */ var _videoList_video_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./videoList/video-list.component */ "./src/app/videoList/video-list.component.ts");
/* harmony import */ var _videoList_videoItem_video_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./videoList/videoItem/video-item.component */ "./src/app/videoList/videoItem/video-item.component.ts");
/* harmony import */ var _shared_safe_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/safe.pipe */ "./src/app/shared/safe.pipe.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _searchBar_searchbar_component__WEBPACK_IMPORTED_MODULE_7__["SearchBarComponent"],
                _videoDetails_video_details_component__WEBPACK_IMPORTED_MODULE_9__["VideoDetailsComponent"],
                _videoList_video_list_component__WEBPACK_IMPORTED_MODULE_10__["VideoListComponent"],
                _videoList_videoItem_video_item_component__WEBPACK_IMPORTED_MODULE_11__["VideoItemComponent"],
                _shared_safe_pipe__WEBPACK_IMPORTED_MODULE_12__["SafePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_api_youtube_service__WEBPACK_IMPORTED_MODULE_8__["YoutubeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/searchBar/searchbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/searchBar/searchbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav>  \r\n  <div class=\"nav-wrapper\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"onFormSubmit(f)\">\r\n      <div class=\"input-field\">\r\n        <input name=\"searchTerm\" ngModel type=\"search\" required>\r\n        <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\r\n        <i class=\"material-icons\">close</i>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/searchBar/searchbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/searchBar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
        // @ViewChild('searchTerm') searchTermRef: ElementRef;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SearchBarComponent.prototype.onFormSubmit = function (form) {
        console.log(form.value.searchTerm);
        this.search.emit(form.value.searchTerm);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchBarComponent.prototype, "search", void 0);
    SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./searchbar.component.html */ "./src/app/searchBar/searchbar.component.html")
        })
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/safe.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/shared/safe.pipe.ts ***!
  \*************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        //return this.sanitizer.sanitize(SecurityContext.URL, url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/shared/video.model.ts":
/*!***************************************!*\
  !*** ./src/app/shared/video.model.ts ***!
  \***************************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
var Video = /** @class */ (function () {
    function Video(videoId, title, description) {
        this.videoId = videoId;
        this.title = title;
        this.description = description;
    }
    return Video;
}());



/***/ }),

/***/ "./src/app/videoDetails/video-details.component.html":
/*!***********************************************************!*\
  !*** ./src/app/videoDetails/video-details.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div id='player' class='ui embed'>\r\n    <iframe title='video player' [src]=\"videoSrc|safe\" allowfullscreen></iframe>\r\n  </div>\r\n  <div class='ui segment'>\r\n    <h4 class='ui header'>{{video.title}}</h4>\r\n    <p>{{video.description}}</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/videoDetails/video-details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/videoDetails/video-details.component.ts ***!
  \*********************************************************/
/*! exports provided: VideoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetailsComponent", function() { return VideoDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_video_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/video.model */ "./src/app/shared/video.model.ts");



var VideoDetailsComponent = /** @class */ (function () {
    function VideoDetailsComponent() {
    }
    // onChanges lifecycle method will listen to changes in the input property "video"
    VideoDetailsComponent.prototype.ngOnChanges = function (changes) {
        // only run when property "video" changed
        if (changes.video) {
            this.videoSrc = "https://www.youtube.com/embed/" + this.video.videoId;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_video_model__WEBPACK_IMPORTED_MODULE_2__["Video"])
    ], VideoDetailsComponent.prototype, "video", void 0);
    VideoDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-details',
            template: __webpack_require__(/*! ./video-details.component.html */ "./src/app/videoDetails/video-details.component.html")
        })
    ], VideoDetailsComponent);
    return VideoDetailsComponent;
}());



/***/ }),

/***/ "./src/app/videoList/video-list.component.css":
/*!****************************************************!*\
  !*** ./src/app/videoList/video-list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* responsive container will make every cell be the same size but is zooms in on the pictures a little to achive this */\r\n.responsive-container {\r\n  display: grid;\r\n  gap: 10px;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  grid-template-rows: repeat(10, 250px);\r\n}\r\n.responsive-container img {\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n/* with image list we want to use React to make the pictures the original demensions but fill in the gap between the images */\r\n.video-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  gap: 0 5px;\r\n  grid-auto-rows: 10px\r\n}\r\n.video-list img {\r\n  width: 250px;\r\n  grid-row-end: span 2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9MaXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1SEFBdUg7QUFDdkg7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDJEQUEyRDtFQUMzRCxxQ0FBcUM7QUFDdkM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQjtBQUVBLDZIQUE2SDtBQUM3SDtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsVUFBVTtFQUNWO0FBQ0Y7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWRlb0xpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogcmVzcG9uc2l2ZSBjb250YWluZXIgd2lsbCBtYWtlIGV2ZXJ5IGNlbGwgYmUgdGhlIHNhbWUgc2l6ZSBidXQgaXMgem9vbXMgaW4gb24gdGhlIHBpY3R1cmVzIGEgbGl0dGxlIHRvIGFjaGl2ZSB0aGlzICovXHJcbi5yZXNwb25zaXZlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDEwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDI1MHB4KTtcclxufVxyXG5cclxuLnJlc3BvbnNpdmUtY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4vKiB3aXRoIGltYWdlIGxpc3Qgd2Ugd2FudCB0byB1c2UgUmVhY3QgdG8gbWFrZSB0aGUgcGljdHVyZXMgdGhlIG9yaWdpbmFsIGRlbWVuc2lvbnMgYnV0IGZpbGwgaW4gdGhlIGdhcCBiZXR3ZWVuIHRoZSBpbWFnZXMgKi9cclxuLnZpZGVvLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAwIDVweDtcclxuICBncmlkLWF1dG8tcm93czogMTBweFxyXG59XHJcblxyXG4udmlkZW8tbGlzdCBpbWcge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBncmlkLXJvdy1lbmQ6IHNwYW4gMjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/videoList/video-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/videoList/video-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"videoList\" class=\"doubling stackable three column ui grid container\" style=\"display: inline-block\">\r\n  <div class=\"column\" *ngFor=\"let video of videoList\">\r\n    <app-video-item [videoItem]=\"video\" (selectedVideo)=\"videoItemSelected(video)\">\r\n    </app-video-item>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/videoList/video-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/videoList/video-list.component.ts ***!
  \***************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_video_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/video.model */ "./src/app/shared/video.model.ts");



var VideoListComponent = /** @class */ (function () {
    function VideoListComponent() {
        this.selectedVideoParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    VideoListComponent.prototype.videoItemSelected = function (video) {
        var selectedVideo = new _shared_video_model__WEBPACK_IMPORTED_MODULE_2__["Video"](video.id.videoId, video.snippet.title, video.snippet.description);
        this.selectedVideoParent.emit(selectedVideo);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], VideoListComponent.prototype, "videoList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoListComponent.prototype, "selectedVideoParent", void 0);
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-list',
            template: __webpack_require__(/*! ./video-list.component.html */ "./src/app/videoList/video-list.component.html"),
            styles: [__webpack_require__(/*! ./video-list.component.css */ "./src/app/videoList/video-list.component.css")]
        })
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "./src/app/videoList/videoItem/video-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/videoList/videoItem/video-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-item {\r\n  display: flex !important;\r\n  align-items: center !important;\r\n  cursor: pointer;\r\n}\r\n\r\n.video-item.item img {\r\n  max-width: 180px;\r\n  max-height: 140px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9MaXN0L3ZpZGVvSXRlbS92aWRlby1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmlkZW9MaXN0L3ZpZGVvSXRlbS92aWRlby1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi52aWRlby1pdGVtLml0ZW0gaW1nIHtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDE0MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/videoList/videoItem/video-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/videoList/videoItem/video-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-image waves-effect waves-block waves-light\">\r\n    <img alt=\"No thumbnail\" class=\"card\" (click)=\"onVideoSelected()\" style=\"cursor: pointer\" [src]=\"thumbnail\">\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <span class=\"card-title activator \"><i class=\"material-icons right\">more_vert</i></span>\r\n    <p>{{title}}</p>\r\n  </div>\r\n  <div class=\"card-reveal\">\r\n    <span class=\"card-title grey-text text-darken-4\">Description\r\n      <i class=\"material-icons right\">close</i></span>\r\n    <p style=\"padding-top: 1rem\">{{description}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/videoList/videoItem/video-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/videoList/videoItem/video-item.component.ts ***!
  \*************************************************************/
/*! exports provided: VideoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoItemComponent", function() { return VideoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoItemComponent = /** @class */ (function () {
    function VideoItemComponent() {
        this.selectedVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    VideoItemComponent.prototype.ngOnChanges = function (changes) {
        if (changes.videoItem) {
            this.title = this.videoItem.snippet.title;
            this.description = this.videoItem.snippet.description;
            this.thumbnail = this.videoItem.snippet.thumbnails.high.url;
        }
    };
    VideoItemComponent.prototype.onVideoSelected = function () {
        console.log(document.getElementById('player'));
        document.getElementById('player').scrollIntoView({
            behavior: 'smooth'
        });
        this.selectedVideo.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoItemComponent.prototype, "videoItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoItemComponent.prototype, "selectedVideo", void 0);
    VideoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-item',
            template: __webpack_require__(/*! ./video-item.component.html */ "./src/app/videoList/videoItem/video-item.component.html"),
            styles: [__webpack_require__(/*! ./video-item.component.css */ "./src/app/videoList/videoItem/video-item.component.css")]
        })
    ], VideoItemComponent);
    return VideoItemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kido\Documents\Study Folder\Angular\Minimalistic_YTBrowser\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map